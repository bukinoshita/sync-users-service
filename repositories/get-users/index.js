// Models
const UserModel = require('../../models/user')

const getUsers = async (query = {}) => {
  try {
    const users = await UserModel.findAsync(query)

    return users
  } catch (error) {
    throw new TypeError(error)
  }
}

module.exports = getUsers
