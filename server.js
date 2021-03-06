// Packages
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const expressValidator = require('express-validator')
const cors = require('cors')

require('dotenv').config()

// Config
const config = require('./config')

// Routes
const routes = require('./routes')

// Helpers
const connectDatabase = require('./helpers/connect-database')
const populateDatabase = require('./helpers/populate-database')

const app = express()

mongoose.Promise = global.Promise

connectDatabase()
populateDatabase()

app.config = config
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(expressValidator())
app.set('port', config.port)
app.use(cors())
app.options('*', cors())

routes(app)

app.listen(app.get('port'), () => {
  console.log(
    `sync users service is listening on port ${app.get('port')} (http://localhost:${app.get(
      'port'
    )})`
  )
  console.log(`Environment ${app.get('env')}`)
})

module.exports = app
