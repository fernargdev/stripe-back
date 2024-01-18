const config = require('./utils/config')
const app = require('./app')

app.listen(config.PORT, () => {
  console.log(`Server listening on http://localhost:${config.PORT}`)
})
