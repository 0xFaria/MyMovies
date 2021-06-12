const knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'postgres',
    password : 'docker',
    database : 'mymovies'
  }
});

module.exports = knex
