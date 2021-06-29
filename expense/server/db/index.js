const { Pool } = require('pg')

// this is how we connect to the postgres database
const pool = new Pool();

module.exports = {
  query: (text, params) => pool.query(text, params),
}
