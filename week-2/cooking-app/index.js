/**
 * Author: Lisa Gee
 * Date: 6/9/24
 * File Name: index.js
 * Description: Node - Week 2 Problem
*/

// TODO: Import your module using require
const {createRecipe, setTimer, quit} = require("./recipes");


// TODO: Implement your CLI program here
//Verify expected values
function main() {
   console.log(createRecipe(["Eggs", "Flour", "Butter"]));
   console.log(setTimer(20));
   console.log(quit());
}

main();