const paymentsRouter = require('express').Router()

paymentsRouter.get('/', (req, res) => {
  res.send('<h1>API</h1>')
})

module.exports = paymentsRouter
