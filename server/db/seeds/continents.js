exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('continents').del()
    .then(function () {
      // Inserts seed entries
      return knex('continents').insert([
        { id: 1, name: 'Africa' },
        { id: 2, name: 'Antarctica' },
        { id: 3, name: 'Asia' },
        { id: 4, name: 'Europe' },
        { id: 5, name: 'NorthAmerica' },
        { id: 6, name: 'SouthAmerica' },
        { id: 7, name: 'Oceania' },
      ])
    })
}
