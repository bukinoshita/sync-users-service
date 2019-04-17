// Packages
const mongoose = require('mongoose')
const Promise = require('bluebird')

const schemaOptions = { timestamps: true }

const userSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    nickname: String,
    avatar: { type: String, required: true }
  },
  schemaOptions
)

const User = mongoose.model('User', userSchema)

User.findOneAndUpdateAsync = Promise.promisify(User.findOneAndUpdate)

module.exports = User
