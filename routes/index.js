// Root
const { name, version, description } = require('../package')

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
}
