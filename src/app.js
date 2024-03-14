const express = require('express')
const app = express()
app.disable('x-powered-by')

const cors = require('cors')

app.use(cors())

const paymentRouter = require('./routes/payment.routes')
app.use(paymentRouter)

module.exports = app
