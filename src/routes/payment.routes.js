const express = require('express')
const router = express.Router()

const {
  stripeSinglePay,
  muhiaStripe,
  stripeWebhook,
  stripeSinglePayB2B,
} = require('../controllers/payments.controller')

router.get('/api', (req, res) => {
  res.json({ message: 'WELCOME' })
})

router.post('/api/pay', express.json(), stripeSinglePay)
router.post('/api/muhia/stripe', express.json(), muhiaStripe)
router.post('/api/b2b', express.json(), stripeSinglePayB2B)

router.post(
  '/api/stripe-webhook',
  express.raw({ type: 'application/json' }),
  stripeWebhook
)

module.exports = router
