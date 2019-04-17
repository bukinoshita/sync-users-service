// Models
const UserModel = require('../../models/user')

// Services
const buildUserSchema = require('../../services/build-user-schema')

const createUser = async user => {
  try {
    const query = { id: user.id }
    const updater = buildUserSchema(user)
    const options = { new: true, upsert: true }

    await UserModel.findOneAndUpdateAsync(query, updater, options)
  } catch (error) {
    throw new TypeError(error)
  }
}

module.exports = createUser
