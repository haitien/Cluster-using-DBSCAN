// Change the style of map
const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
];

// Change the color of route (subway-lines data)
const routeColors = {
  // IND Eighth Avenue Line
  A: '#2850ad',
  C: '#2850ad',
  E: '#2850ad',

  // IND Sixth Avenue Line
  B: '#ff6319',
  D: '#ff6319',
  F: '#ff6319',
  M: '#ff6319',

  // IND Crosstown Line
  G: '#6cbe45',

  // BMT Canarsie Line
  L: '#a7a9ac',

  // BMT Nassau Street Line
  J: '#996633',
  Z: '#996633',

  // BMT Broadway Line
  N: '#fccc0a',
  Q: '#fccc0a',
  R: '#fccc0a',
  W: '#fccc0a',

  // IRT Broadway – Seventh Avenue Line
  '1': '#ee352e',
  '2': '#ee352e',
  '3': '#ee352e',

  // IRT Lexington Avenue Line
  '4': '#00933c',
  '5': '#00933c',
  '6': '#00933c',

  // IRT Flushing Line
  '7': '#b933ad',

  // Shuttles
  S: '#808183'
};


// initMap is called from the Google Maps JS library after the library has initialised itself.
function initMap() {
  const map = new google.maps.Map(document.querySelector('#map'), {
    zoom: 14,
    center: {
      // New York City
      lat: 40.7305,
      lng: -73.9091
    },
    styles: mapStyle
  });
  
  const infowindow = new google.maps.InfoWindow();
  let stationDataFeatures = [];

  map.data.loadGeoJson('/data/subway-lines');

  // Style the GeoJSON features (stations & lines)
  map.data.setStyle(feature => {
    const type = feature.getProperty('type');
    if (type === 'cluster') {
      return {
        icon: {
          fillColor: '#3bb896',
          strokeColor: '#3bb896',
          fillOpacity: 1.0,
          scale: 1.5,
          path: 'M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4' +
            '.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8' +
            's3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
        }
      };
    } else if (type === 'station') {
      return {
        icon: {
          fillColor: '#683bb8',
          strokeColor: '#683bb8',
          fillOpacity: 1.0,
          scale: 1.2,
          path: 'M12 2c-4 0-8 .5-8 4v9.5C4 17.43 5.57 19 7.5 19L6 20.5v.5h2.2' +
            '3l2-2H14l2 2h2v-.5L16.5 19c1.93 0 3.5-1.57 3.5-3.5V6c0-3.5-3.58-' +
            '4-8-4zM7.5 17c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1' +
            '.5S8.33 17 7.5 17zm3.5-7H6V6h5v4zm2 0V6h5v4h-5zm3.5 7c-.83 0-1.5' +
            '-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z'
        }
      };
    }

    const routeSymbol = feature.getProperty('rt_symbol');
    return {
      strokeColor: routeColors[routeSymbol]
    };
  });

  map.data.addListener('click', ev => {
    const f = ev.feature;
    const title = f.getProperty('title');
    const description = f.getProperty('description');

    if (!description) {
      return;
    }

    // Show info window when click to place
    infowindow.setContent(`<b>${title}</b><br/> ${description}`);
    infowindow.setPosition(f.getGeometry().get());
    infowindow.setOptions({
      pixelOffset: new google.maps.Size(0, -30)
    });
    infowindow.open(map);
  });

  // The idle callback is called every time the map has finished
  // moving, zooming,  panning or animating. We use it to load
  // Geojson for the new viewport.
  google.maps.event.addListener(map, 'idle', () => {
    const sw = map.getBounds().getSouthWest();
    const ne = map.getBounds().getNorthEast();
    const zm = map.getZoom();
    // console.log("sw.lat: ", sw.lat());
    // console.log("sw.lng: ", sw.lng());
    // console.log("ne: ", sw);
    console.log("Current zoom level: ", zm);
    map.data.loadGeoJson(
      `/data/subway-stations?viewport=${sw.lat()},${sw.lng()}|${ne.lat()},${ne.lng()}&zoom=${zm}`,
      null,
      features => {
        stationDataFeatures.forEach(dataFeature => {
          map.data.remove(dataFeature);
        });
        stationDataFeatures = features;
      }
    );
  });
}