exports.up = function (knex) {
    return knex.schema.createTable('animals', table => {
      table.increments('id')
      table.string('name')
      table.integer('continent_id').references('continents.id')
      table.string('animal_type')
      table.integer('cuteness_rating')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('animals')
  }
  