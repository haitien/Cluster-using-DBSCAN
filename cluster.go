package myproject

import (
	"clusters"
	"fmt"
	"math"

	rtree "github.com/dhconnelly/rtreego"
	geojson "github.com/paulmach/go.geojson"
)

const minZoomStopCluster = 14
const nyLatitude float64 = 40.7305
const stationMarkerWidth float64 = 40
const EarthRadius float64 = 6378.137

func (s *Station) Point() clusters.Point {
	var p clusters.Point
	p[0] = s.feature.Geometry.Point[0]
	p[1] = s.feature.Geometry.Point[1]
	return p
}

func clusterStations(spatials []rtree.Spatial, zoom int) (*geojson.FeatureCollection, error) {
	var pl clusters.PointList

	for _, spatial := range spatials {
		station := spatial.(*Station)
		pl = append(pl, station.Point())
	}
	clusteringRadius, minClusterSize := getRadiusAndMinClusterSize(zoom)

	clusters, noise := clusters.DBScan(pl, clusteringRadius, minClusterSize)
	fc := geojson.NewFeatureCollection()
	for _, id := range noise {
		f := spatials[id].(*Station).feature
		name, err := f.PropertyString("name")
		if err != nil {
			return nil, err
		}
		notes, err := f.PropertyString("notes")
		if err != nil {
			return nil, err
		}
		f.SetProperty("title", fmt.Sprintf("%v Station", name))
		f.SetProperty("description", notes)
		f.SetProperty("type", "station")
		fc.AddFeature(f)
	}
	for _, clstr := range clusters {
		ctr, _, _ := clstr.CentroidAndBounds(pl)
		f := geojson.NewPointFeature([]float64{ctr[0], ctr[1]})
		n := len(clstr.Points)
		f.SetProperty("title", fmt.Sprintf("Cluster #%v", clstr.C+1))
		f.SetProperty("description", fmt.Sprintf("Contains %v stations", n))
		f.SetProperty("type", "cluster")
		fc.AddFeature(f)
	}
	return fc, nil
}

func getRadiusAndMinClusterSize(zoom int) (float64, int) {
	if zoom >= minZoomStopCluster {
		return 0.01, 2
	}
	groundResolution := groundResolutionByLatAndZoom(nyLatitude, zoom)
	clusteringRadius := groundResolution * stationMarkerWidth
	return clusteringRadius, 3
}

func groundResolutionByLatAndZoom(lat float64, zoom int) float64 {
	// https://wiki.openstreetmap.org/wiki/Zoom_levels
	numPixels := math.Pow(2, float64(8+zoom))
	return cos(lat) * 2 * math.Pi * EarthRadius / numPixels
}

func cos(degree float64) float64 {
	return math.Cos(degree * math.Pi / 180)
}
