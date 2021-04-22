exports.up = function (knex) {
    return knex.schema.createTable('continents', table => {
      table.increments('id')
      table.string('name')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.dropTable('continents')
  }
  