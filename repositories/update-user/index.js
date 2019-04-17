// Models
const UserModel = require('../../models/user')

const updateUser = async user => {
  try {
    const query = { id: user.id }
    await UserModel.findOneAndUpdateAsync(query, user)
  } catch (error) {
    throw new TypeError(error)
  }
}

module.exports = updateUser
