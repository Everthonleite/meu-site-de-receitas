const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController.js');

router.get('/', (req, res) => {
  const recipes = recipeController.getRecipes();
  res.render('recipes', { recipes, username: req.session.username });
});

router.post('/add', (req, res) => {
  const { title, description, image } = req.body;
  recipeController.addRecipe(title, description, image);
  res.redirect('/recipes');
});

module.exports = router;
