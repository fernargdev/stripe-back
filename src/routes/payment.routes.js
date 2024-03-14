const express = require('express')
const router = express.Router()

const {
  stripeSinglePay,
  stripeWebhook,
} = require('../controllers/payments.controller')

router.post('/stripe-single-pay', express.json(), stripeSinglePay)

router.post(
  '/stripe-webhook',
  express.raw({ type: 'application/json' }),
  stripeWebhook
)

module.exports = router
