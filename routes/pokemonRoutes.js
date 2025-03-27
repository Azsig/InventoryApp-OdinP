const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

// Rute untuk kategori
router.get('/', pokemonController.getAllCategories);
router.post('/categories/new', pokemonController.createCategory);
router.post('/categories/:id/update', pokemonController.updateCategory);
router.post('/categories/:id/delete', pokemonController.deleteCategory);

// Rute untuk Pokemon
router.get('/categories/:id', pokemonController.getPokemonsByCategory);
router.post('/pokemons/new', pokemonController.createPokemon);
router.post('/pokemons/:id/update', pokemonController.updatePokemon);
router.post('/pokemons/:id/delete', pokemonController.deletePokemon);

module.exports = router;