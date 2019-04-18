// Root
const { name, version, description } = require('../package')

// Controllers
const slackController = require('../controllers/slack')
const usersController = require('../controllers/users')
const healthController = require('../controllers/health')

// Resources
const slackResources = require('../resources/slack')

// Config
const config = require('../config')

module.exports = app => {
  app.get('/', (req, res) => {
    res.send({
      name,
      version,
      description,
      environment: config.env
    })
  })

  app.post('/slack/new', slackResources.new, slackController.new)

  app.get('/users', usersController.get)

  app.get('/health', healthController.databaseConnection)
}
