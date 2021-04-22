exports.up = function (knex) {
  return knex.schema.createTable('animals', table => {
    table.increments('id')
    table.string('animal')
    table.string('emoji')
    table.string('description')
    table.integer('continent')
    table.string('image')
    table.integer('cuteness_rating')
    table.integer('danger_rating')
    table.integer('can_jump_over_car')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('animals')
}
