const { Pool } = require('pg');

module.exports = new Pool({
  host: 'localhost',
  user: 'azsig',
  password: '112141linux',
  database: 'pokemon_inventory',
  port: 5432
});