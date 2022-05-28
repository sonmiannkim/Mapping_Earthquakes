let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},

        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]
          }
        }
          
]};

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.5, -122.5], 10);

//Features Object
var geojsonFeature =
{
      type: "Feature",

      properties: {
      mag: 1.88,
      place: "6km SE of Pahala, Hawaii",
      time: 1573766377230,
      type: "earthquake",
      title: "M 1.9 - 6km SE of Pahala, Hawaii"
      },
      geometry: {
      type: "Point",
      coordinates: [-155.4329987, 19.1634998]
    },
  };


// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport).addTo(map);
//L.geoJSON(geojsonFeature).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  pointToLayer: function(feature, latlng) {
    console.log(feature);
    return L.marker(latlng).bindPopup("<h2>" + feature.properties.name + "</h2><br><hr>" + feature.properties.city +", " + feature.properties.country);
  }

}).addTo(map);

L.geoJSON(sanFranAirport, {
  onEachFeature: function(feature, layer){
    console.log(layer);
    layer.bindPopup("<h2>Airport Code : " + feature.properties.faa + "</h2><br><hr>Airport name: " + feature.properties.name);
  }
}).addTo(map);
