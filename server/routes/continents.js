const express = require('express')

const db = require('../db/continents')

const router = express.Router()

router.get('/', (req, res) => {
  db.getContinents()
    .then(results => {
      res.json({ continents: results.map(continent => continent.name) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
