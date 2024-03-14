const express = require('express')
const router = express.Router()

const {
  stripeSinglePay,
  stripeWebhook,
} = require('../controllers/payments.controller')

router.get('/api', (req, res) => {
  res.json({ message: 'WELCOME' })
})

router.post('/api/pay', express.json(), stripeSinglePay)

router.post(
  '/api/stripe-webhook',
  express.raw({ type: 'application/json' }),
  stripeWebhook
)

module.exports = router
