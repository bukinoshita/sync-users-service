// Packages
const mongoose = require('mongoose')
const Promise = require('bluebird')

const schemaOptions = { timestamps: true }

const userSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    nickname: String,
    title: String,
    avatar: { type: String, required: true },
    lastUpdate: Date
  },
  schemaOptions
)

const User = mongoose.model('User', userSchema)

User.findOneAndUpdateAsync = Promise.promisify(User.findOneAndUpdate)
User.findAsync = Promise.promisify(User.find)

module.exports = User
