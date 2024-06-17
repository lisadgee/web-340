"use strict";
//Object for storing AU planet-distance values
const planetDistance = {
  "Earth" : 1.0,
  "Mars" : 1.5,
  "Mercury" : 0.4,
  "Venus": 0.7,
  "Jupiter" : 5.2,
  "Saturn" : 9.6,
  "Uranus" : 19.2,
  "Neptune": 30,
  "Pluto": 39.5
}
//Function for calculating distance between planets
function calculateDistance(planet1, planet2) {
  /* Used bracket notation to retrieve specific values from the planet-distance object.  Used 
  absolute value function from math library to return positive distance value.  Used .toFixed to 
  trim return value down to one decimal place.  Used parseFloat to convert string to a float.
  */
  return parseFloat(Math.abs(planetDistance[planet1] - planetDistance[planet2]).toFixed(1));
}

module.exports = calculateDistance;  //Make accessible