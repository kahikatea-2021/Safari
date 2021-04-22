const express = require('express')
const path = require('path')

const continentsRoutes = require('./routes/continents')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/continents', continentsRoutes)

module.exports = server
