// Creating the map object
let myMap = L.map("map", {
    center: [37.0902, -95.7129],
    zoom: 2
  });
// Adding the tile layer

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Load the GeoJSON data.
// let geoData = "complete.json";

const geoData = require('./complete.json');
console.log(data);

let geojson;

// Get the data with d3.
d3.json(geoData).then(function(data) {

  // Create a new choropleth layer.
  geojson = L.choropleth(data, {

    // Define which property in the features to use.
    valueProperty: "population",

    // Set the color scale.
    scale: ["#ffffb2", "#b10026"],

    // The number of breaks in the step range
    steps: 10,

    // q for quartile, e for equidistant, k for k-means
    mode: "q",
    style: {
      // Border color
      color: "#fff",
      weight: 1,
      fillOpacity: 0.8
    },

//     // Binding a popup to each layer
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup("<strong>" + feature.properties.NAME + "</strong><br /><br />Estimated employed population with children age 6-17: " +
//         feature.properties.DP03_16E + "<br /><br />Estimated Total Income and Benefits for Families: $" + feature.properties.DP03_75E);
//     }
   }).addTo(myMap);

});