//File that runs test for distance-calculator module.
"use strict";

const assert = require('assert'); //import assert library to run test
const calculateDistance = require('../src/distance-calculator');  //import calculateDistance function

//Unit test for distance from Earth to Mars
function testEarthToMars() {
  try {
    //Verify return value is = expected value
    assert.strictEqual(calculateDistance("Earth", "Mars"), 0.5);
    console.info("Passed testEarthToMars");
    return true;
  } catch (error) {
    //Catch and display errors thrown
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

//Unit test for distance from Mars to Saturn
function testMarsToSaturn() {
  try {
     //Verify return value is = expected value
    assert.strictEqual(calculateDistance("Saturn", "Mars"), 8.1);
    console.info("Passed testMarsToSaturn");
    return true;
  } catch (error) {
    //Catch and display errors thrown
    console.error(`Failed testMarsToSaturn: ${error.message}`);
    return false;
  }
}

//Unit test for distance from Saturn to Jupiter
function testSaturnToJupiter() {
  try {
     //Verify return value is = expected value
    assert.strictEqual(calculateDistance("Saturn", "Jupiter"), 4.4);
    console.info("Passed testSaturnToJupiter");
    return true;
  } catch (error) {
    //Catch and display errors thrown
    console.error(`Failed testSaturnToJupiter: ${error.message}`);
    return false;
  }
}

// Call test functions 
testEarthToMars();
testMarsToSaturn();
testSaturnToJupiter();