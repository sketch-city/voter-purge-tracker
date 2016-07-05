exports.up = function(knex, Promise) {
  return Promise.all([

    knex.schema.createTable('precincts', function(table) {
      table.increments('id').primary();
      table.integer('precinct');
    })

  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([

    knex.schema.dropTable('precincts')

  ]);
};
