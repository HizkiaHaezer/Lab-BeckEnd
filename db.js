const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: '050304',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'be'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};