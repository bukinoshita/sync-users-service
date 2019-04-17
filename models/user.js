// Packages
const mongoose = require('mongoose')

const schemaOptions = { timestamps: true }

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    nickname: String,
    avatar: { type: String, required: true }
  },
  schemaOptions
)

const User = mongoose.model('User', userSchema)

module.exports = User
