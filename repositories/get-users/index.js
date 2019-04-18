// Models
const UserModel = require('../../models/user')

const getUsers = async (query = {}) => {
  try {
    const users = await UserModel.findAsync(query, null, { sort: { lastUpdate: -1 } })

    return users
  } catch (error) {
    throw new TypeError(error)
  }
}

module.exports = getUsers
