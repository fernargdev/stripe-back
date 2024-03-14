const config = require('../utils/config')
const stripe = require('stripe')
const { getConnection, sql, queries } = require('../database/indexdb')

const stripeSinglePay = async (req, res) => {
  try {
    console.log(req.body)

    const payment = req.body

    // Crear la descripción del booking
    let description = `Pago para ${payment.company} con idc ${payment.idc} y idf ${payment.idf}`
    let name = `Pago - $${payment.total}`

    // Stripe Checkout
    const stripeCheckout = stripe(config.STRIPE_PRODUCTION_SECRET).checkout

    //   Create Checkout Session
    const session = await stripeCheckout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      success_url: `https://www.iracubacrm.com/DPage.aspx?Key=26554&
      idc=${payment.idc}&idf=${payment.idf}&idcp=1&company=${payment.company}`,
      cancel_url: `https://www.iracubacrm.com/DPage.aspx?Key=26554&
      idc=${payment.idc}&idf=${payment.idf}&idcp=0&company=${payment.company}`,
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: name,
              description: description,
            },
            unit_amount: Math.round(payment.total * 100),
          },
          quantity: 1,
        },
      ],
      metadata: {
        idf: payment.idf,
      },
    })

    res.json(session.url)
  } catch (error) {
    return res.status(400).json({
      error: error,
      message: req.body,
    })
  }
}

const stripeWebhook = async (req, res) => {
  const webhookSecret = config.STRIPE_WEBHOOK_SECRET
  const sig = req.headers['stripe-signature']
  let event

  try {
    event = stripe(config.STRIPE_PRODUCTION_SECRET).webhooks.constructEvent(
      req.body,
      sig,
      webhookSecret
    )
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`)
    console.log(`Webhook Error: ${err.message}`)
    return
  }

  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object

      try {
        const pool = await getConnection()
        await pool
          .request()
          .input('ID', sql.Int, paymentIntent.metadata.idf)
          .input('IdPago', sql.NVarChar, paymentIntent.id)
          .input('EmailPago', sql.NVarChar, paymentIntent.receipt_email)
          .input('DatePago', sql.DateTime, new Date())
          .query(queries.updateRecords)
      } catch (err) {
        console.log(`Database Error: ${err.message}`)
      }

      break
    default:
      console.log(`Event type ${event.type}`)
      break
  }

  res.send()
}

module.exports = {
  stripeSinglePay,
  stripeWebhook,
}
