const express = require('express')
const router = express.Router()

const { stripeSinglePay } = require('../controllers/payments.controller')

router.post('/stripe-single-pay', express.json(), stripeSinglePay)

module.exports = router
