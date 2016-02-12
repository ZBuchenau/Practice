
exports.up = function(knex, Promise) {
  return Promise.all([

    knex.schema.createTable('book_info', function(table){
      table.increments('id');
      table.string('book_title', 100);
      table.string('book_genre', 50);
      table.text('book_description');
      table.string('book_cover_url', 255);
    }),

    knex.schema.createTable('author_info', function(table){
      table.increments('id');
      table.string('author1_firstname', 255);
      table.string('author1_lastname', 255);
      table.string('author1_portrait', 255);
      table.text('author1_biography');

      table.string('author2_firstname', 255);
      table.string('author2_lastname', 255);
      table.string('author2_portrait', 255);
      table.text('author2_biography');

      table.string('author3_firstname', 255);
      table.string('author3_lastname', 255);
      table.string('author3_portrait', 255);
      table.text('author3_biography');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('book_info'),
    knex.schema.dropTable('author_info')
  ]);
};
