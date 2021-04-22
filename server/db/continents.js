const connection = require('./connection')

function getContinents (db = connection) {
  return db('continents').select()
}

module.exports = {
  getContinents
}
