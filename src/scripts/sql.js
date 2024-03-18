// sqlserver.js
const { getConnection, sql, queries } = require('../database/indexdb')

const updateRecords = async () => {
  try {
    const pool = await getConnection()
    const result = await pool
      .request()
      .input('ID', sql.Int, 418039)
      .input('IdPago', sql.NVarChar, 'evt_3OtoyhHg10uPn5yG1bphZtfL')
      .input('EmailPago', sql.NVarChar, 'rodfernandoangel@gmail.com')
      .input('DatePago', sql.DateTime, new Date())
      .query(queries.updateRecords)
    console.log(result)
  } catch (err) {
    console.log(err.message)
  }
}

const getBasicInfo = async () => {
  try {
    const pool = await getConnection()
    const result = await pool.request().query(queries.getBasicInfo)
    console.log(result)
  } catch (err) {
    console.log(err.message)
  }
}

updateRecords()
getBasicInfo()
