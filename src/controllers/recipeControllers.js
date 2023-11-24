const Recipe = require('../models/recipe');

const recipes = [];

function addRecipe(title, description, image) {
  const recipe = new Recipe(title, description, image);
  recipes.push(recipe);
}

function getRecipes() {
  return recipes;
}

module.exports = { addRecipe, getRecipes };
