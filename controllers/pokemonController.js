const queries = require('../db/queries');

// Menampilkan semua kategori
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await queries.getAllCategories();
    res.render('index', { title: 'Pokemon Categories', categories });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving categories');
  }
};

// Membuat kategori baru
exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    await queries.insertCategory(name);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating category');
  }
};

// Memperbarui kategori
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await queries.updateCategory(id, name);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating category');
  }
};

// Menghapus kategori
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await queries.deleteCategory(id);
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting category');
  }
};

// Menampilkan Pokemon berdasarkan kategori
exports.getPokemonsByCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemons = await queries.getPokemonsByCategory(id);
    res.render('pokemons', { title: 'Pokemons', pokemons });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving pokemons');
  }
};

// Membuat Pokemon baru
exports.createPokemon = async (req, res) => {
  try {
    const { name, level, categoryId } = req.body;
    await queries.insertPokemon(name, level, categoryId);
    res.redirect(`/categories/${categoryId}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating pokemon');
  }
};

// Memperbarui Pokemon
exports.updatePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, level, categoryId } = req.body;
    await queries.updatePokemon(id, name, level, categoryId);
    res.redirect(`/categories/${categoryId}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating pokemon');
  }
};

// Menghapus Pokemon
exports.deletePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    await queries.deletePokemon(id);
    res.redirect('back');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting pokemon');
  }
};