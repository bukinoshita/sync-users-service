// Root
const { name, version, description } = require('../package')

// Controllers
const slackController = require('../controllers/slack')

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

  app.post('/slack/new', slackController.new)
}
