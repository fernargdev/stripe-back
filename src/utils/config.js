require('dotenv').config()

// Port
const PORT = process.env.PORT || 3001

// Stripe keys
const STRIPE_TEST_PUBLIC = process.env.STRIPE_TEST_PUBLIC
const STRIPE_TEST_SECRET = process.env.STRIPE_TEST_SECRET
const STRIPE_PRODUCTION_PUBLIC = process.env.STRIPE_PRODUCTION_PUBLIC
const STRIPE_PRODUCTION_SECRET = process.env.STRIPE_PRODUCTION_SECRET

// Stripe webhooks
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET

// DB mssql
const USER = process.env.USER
const PASSWORD = process.env.PASSWORD
const SERVER = process.env.SERVER
const DATABASE = process.env.DATABASE

module.exports = {
  PORT,

  STRIPE_TEST_PUBLIC,
  STRIPE_TEST_SECRET,
  STRIPE_PRODUCTION_PUBLIC,
  STRIPE_PRODUCTION_SECRET,

  STRIPE_WEBHOOK_SECRET,

  USER,
  PASSWORD,
  SERVER,
  DATABASE,
}
