const express = require('express')
const cors = require('cors')

const app = express()
const paymentsRouter = require('./controllers/payments')

app.use(cors())
app.use(express.json())
app.use(paymentsRouter)

module.exports = app
