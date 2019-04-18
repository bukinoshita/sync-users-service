// Packages
const mongoose = require('mongoose')

const databaseConnection = (req, res) => {
  if (mongoose.connection.readyState === 1) {
    return res.status(200).send({ status: 'up' })
  }

  res.status(500).send({
    status: 'down',
    results: [
      {
        error: 'Database connection'
      }
    ]
  })
}

module.exports = databaseConnection
