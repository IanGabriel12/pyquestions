const knex = require('knex');
const path = require('path');

const connection = knex({
   client: 'sqlite3',
   connection: {
      filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
   }
});

module.exports = connection;