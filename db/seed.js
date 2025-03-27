const pool = require('./pool');

const pokemonData = [
  { name: "Bulbasaur", element: "Grass", level: 5 },
  { name: "Charmander", element: "Fire", level: 5 },
  { name: "Squirtle", element: "Water", level: 5 },
  { name: "Pikachu", element: "Electric", level: 5 },
  { name: "Jigglypuff", element: "Fairy", level: 5 },
  { name: "Zubat", element: "Poison", level: 5 },
  { name: "Geodude", element: "Rock", level: 5 },
  { name: "Eevee", element: "Normal", level: 5 },
];

async function seedDatabase() {
  try {
    // Hapus data lama
    await pool.query('DELETE FROM pokemons');
    await pool.query('DELETE FROM categories');

    // Tambahkan kategori (elemen Pokemon)
    const elements = [...new Set(pokemonData.map(pokemon => pokemon.element))];
    const categoryIds = {};

    for (const element of elements) {
      const result = await pool.query('INSERT INTO categories (name) VALUES ($1) RETURNING id', [element]);
      categoryIds[element] = result.rows[0].id;
    }

    // Tambahkan Pokemon
    for (const pokemon of pokemonData) {
      const categoryId = categoryIds[pokemon.element];
      await pool.query(
        'INSERT INTO pokemons (name, level, category_id) VALUES ($1, $2, $3)',
        [pokemon.name, pokemon.level, categoryId]
      );
    }

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    pool.end();
  }
}

seedDatabase();