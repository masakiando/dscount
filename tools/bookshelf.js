import bookshelf from 'bookshelf';
let knex = require('../db/knex.js');

export default bookshelf(knex);
