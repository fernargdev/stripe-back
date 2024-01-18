const paymentsRouter = require('express').Router()
const notes = require('../models/notes')

paymentsRouter.get('/', (req, res) => {
  res.send('<h1>API</h1>')
})

paymentsRouter.get('/api/notes', (req, res) => {
  res.json(notes)
})

module.exports = paymentsRouter
