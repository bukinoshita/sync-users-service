// Models
const UserModel = require('../../models/user')

const updateUser = async user => {
  try {
    const query = { id: user.id }
    const options = { new: true, upsert: true }
    return UserModel.findOneAndUpdateAsync(query, user, options)
  } catch (error) {
    throw new TypeError(error)
  }
}

module.exports = updateUser
