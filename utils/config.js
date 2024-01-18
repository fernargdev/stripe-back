require('dotenv').config()

const PORT = process.env.PORT || 3001
const STRIPE_TEST_PUBLIC = process.env.STRIPE_TEST_PUBLIC
const STRIPE_TEST_SECRET = process.env.STRIPE_TEST_SECRET

module.exports = {
  PORT,
  STRIPE_TEST_PUBLIC,
  STRIPE_TEST_SECRET,
}
