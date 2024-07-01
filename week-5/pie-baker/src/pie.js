/**
 * Author: Lisa Gee
 * Date: Jun 29, 2024
 * File Name: pie.js
 * Description: pie module
 */
"use strict";

// Function for baking pie with two parameters
function bakePie(pieType, ingredients) {
  //Essential ingredients
  const essentialIngredients = [
    "flour",
    "sugar",
    "butter"
  ]
  
  //Verify the essential ingredient is in the list. If not, warn and exit
  essentialIngredients.forEach(essentialIngredient => {
    if (ingredients.includes(essentialIngredient) == false) {
      console.log(`WARNING: ${essentialIngredient} not found in the list` )
      process.exit(1);  
    }
  });

  console.log(`${pieType} pie has been baked.` )
}


module.exports = { bakePie };