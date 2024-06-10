/**
 * Author: Lisa Gee
 * Date: 6/9/24
 * File Name: recipes.js
 * Description: Node - Week 2 Problem
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  let recipe = "Recipe created with ingredients: ";
  let ingredientsList = "";
  for (let ingredient of ingredients) {  //loop thru array of ingredients
    ingredientsList = ingredientsList.concat(ingredient + ", "); //add each ingredient to list
  }

  //trim trailing characters
  return recipe + ingredientsList.slice(0, -2);
}

// Define the setTimer function
function setTimer(minutes) {
  return "Timer set for " + minutes + " minutes";
}

// Define the quit function
function quit() {
  return "Program exited"
}

// TODO: Export the functions
module.exports = {createRecipe, setTimer, quit}