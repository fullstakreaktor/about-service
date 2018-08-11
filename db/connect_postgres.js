const { Pool } = require('pg');

const pool = new Pool({
  database: 'rental_hosts',
  host: 'localhost',
});

// pool.query('select * from hosts where id = 1', (err, res) => {
//   console.log(err, res);
//   pool.end();
// });


module.exports = pool;
