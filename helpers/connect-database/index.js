// Packages
const mongoose = require('mongoose')

// Config
const config = require('../../config')

const connectDatabase = () => {
  mongoose.connect(config.database, { useNewUrlParser: true })
  mongoose.connection.on('error', () =>
    console.log('MongoDB Connection Error. Please make sure that MongoDB is running.')
  )
  mongoose.connection.on('open', () => console.log('Database connection OK'))
}

module.exports = connectDatabase
