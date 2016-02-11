require('dotenv').load();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'books'
    },
     migrations: {
      tableName: 'knex_migrations'
    }
  }
};
