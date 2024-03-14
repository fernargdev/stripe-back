const { getConnection, sql } = require('./connection')
const { queries } = require('./queries')

module.exports = {
  getConnection,
  sql,
  queries,
}
