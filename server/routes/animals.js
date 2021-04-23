const express = require('express')

const db = require('../db/animals')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAnimals()
    .then(results => {
      res.json({ animals: results.map(animal => animal) })
      return null
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

module.exports = router
