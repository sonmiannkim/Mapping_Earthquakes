console.log("working");
// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
let line = [
  [37.6213, -122.3790],
  [30.1975, -97.6664],
  [43.678524, -79.6291291306445],
  [40.6413, -73.7781]
 ];
 
// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([30.1975, -97.6664], 5);

/// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "white",
  weight: 4,
  dashArray: "30 10" 
  
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

 

