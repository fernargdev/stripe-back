const paymentsRouter = require('express').Router()
const notes = require('../models/notes')

// GETS
paymentsRouter.get('/', (req, res) => {
  res.send('<h1>API</h1>')
})

paymentsRouter.get('/api/notes', (req, res) => {
  res.json(notes)
})

// POSTS
paymentsRouter.post('/api/pay', async (req, res) => {
  const payment = req.body.items[0]

  // Crear la descripción del booking
  let description = `Pago para ${payment.company} con idc ${payment.idc} y idf ${payment.idf}`
  let name = `Pago - $${payment.total}`

  //   Create Checkout Session
  const session = await config.STRIPE_TEST_PUBLIC.checkout.sessions.create({
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
            // Agregar la descripción a los datos del producto
            description: description,
          },
          unit_amount: payment.total * 100,
        },
        quantity: 1,
      },
    ],
  })

  res.json(session.url)
})

module.exports = paymentsRouter
