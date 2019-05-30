package myproject

import (
	"encoding/json"
	"fmt"
	"log"
	"math"
	"net/http"
	"strconv"
	"strings"

	rtree "github.com/dhconnelly/rtreego"
	geojson "github.com/paulmach/go.geojson"
)

// Create a new Rtree with number of spatial dimensions and the minimum and maximum branching factor
var Stations = rtree.NewTree(2, 25, 50)

type Station struct {
	feature *geojson.Feature
}

func (s *Station) Bounds() *rtree.Rect {
	return rtree.Point{
		s.feature.Geometry.Point[0],
		s.feature.Geometry.Point[1],
	}.ToRect(1e-6)
}

func loadStations() {
	stationsGeojson := GeoJSON["subway-stations.geojson"]
	fc, err := geojson.UnmarshalFeatureCollection(stationsGeojson)
	if err != nil {
		log.Fatal(err)
	}
	for _, f := range fc.Features {
		Stations.Insert(&Station{f})
	}
}

func subwayStationsHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-type", "application/json")
	vp := r.FormValue("viewport")
	rect, err := newRect(vp)
	if err != nil {
		str := fmt.Sprintf("Couldn't parse viewport: %s", err)
		http.Error(w, str, 400)
		return
	}
	zm, err := strconv.ParseInt(r.FormValue("zoom"), 10, 0)
	if err != nil {
		str := fmt.Sprintf("Couldn't parse zoom: %s", err)
		http.Error(w, str, 400)
		return
	}
	s := Stations.SearchIntersect(rect)
	fc, err := clusterStations(s, int(zm))
	if err != nil {
		str := fmt.Sprintf("Couldn't cluster results: %s", err)
		http.Error(w, str, 500)
		return
	}
	err = json.NewEncoder(w).Encode(fc)
	if err != nil {
		str := fmt.Sprintf("Couldn't encode results: %s", err)
		http.Error(w, str, 500)
		return
	}
}

func newRect(vp string) (*rtree.Rect, error) {
	ss := strings.Split(vp, "|")
	sw := strings.Split(ss[0], ",")
	swLat, err := strconv.ParseFloat(sw[0], 64)
	if err != nil {
		return nil, err
	}
	swLng, err := strconv.ParseFloat(sw[1], 64)
	if err != nil {
		return nil, err
	}
	ne := strings.Split(ss[1], ",")
	neLat, err := strconv.ParseFloat(ne[0], 64)
	if err != nil {
		return nil, err
	}
	neLng, err := strconv.ParseFloat(ne[1], 64)
	if err != nil {
		return nil, err
	}
	minLat := math.Min(swLat, neLat)
	minLng := math.Min(swLng, neLng)
	distLat := math.Max(swLat, neLat) - minLat
	distLng := math.Max(swLng, neLng) - minLng

	r, err := rtree.NewRect(
		rtree.Point{
			minLng - distLng/10,
			minLat - distLat/10,
		},
		[]float64{
			distLng * 1.2,
			distLat * 1.2,
		})
	if err != nil {
		return nil, err
	}
	return r, nil
}
