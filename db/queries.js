const pool = require('./pool');

// Query untuk kategori
async function getAllCategories() {
  const { rows } = await pool.query('SELECT * FROM categories');
  return rows;
}

async function insertCategory(name) {
  await pool.query('INSERT INTO categories (name) VALUES ($1)', [name]);
}

async function updateCategory(id, name) {
  await pool.query('UPDATE categories SET name = $1 WHERE id = $2', [name, id]);
}

async function deleteCategory(id) {
  await pool.query('DELETE FROM categories WHERE id = $1', [id]);
}

// Query untuk Pokemon
async function getPokemonsByCategory(categoryId) {
  const { rows } = await pool.query('SELECT * FROM pokemons WHERE category_id = $1', [categoryId]);
  return rows;
}

async function insertPokemon(name, level, categoryId) {
  await pool.query('INSERT INTO pokemons (name, level, category_id) VALUES ($1, $2, $3)', [name, level, categoryId]);
}

async function updatePokemon(id, name, level, categoryId) {
  await pool.query('UPDATE pokemons SET name = $1, level = $2, category_id = $3 WHERE id = $4', [name, level, categoryId, id]);
}

async function deletePokemon(id) {
  await pool.query('DELETE FROM pokemons WHERE id = $1', [id]);
}

module.exports = {
  getAllCategories,
  insertCategory,
  updateCategory,
  deleteCategory,
  getPokemonsByCategory,
  insertPokemon,
  updatePokemon,
  deletePokemon
};