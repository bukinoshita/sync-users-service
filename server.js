// Packages
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')

require('dotenv').config()

// Config
const config = require('./config')

// Routes
const routes = require('./routes')

const app = express()

app.config = config
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))
app.set('port', config.port)

routes(app)

app.listen(app.get('port'), () => {
  console.log(
    `sync users service is listening on port ${app.get('port')} (http://localhost:${app.get(
      'port'
    )})`
  )
  console.log(`Environment ${app.get('env')}`)
})
