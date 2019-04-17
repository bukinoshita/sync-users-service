// Models
const UserModel = require('../../models/user')

const createUser = async user => {
  try {
    const query = { id: user.id }
    const updater = {
      id: user.id,
      name: user.real_name,
      nickname: user.name,
      avatar: user.profile.image_72
    }
    const options = { new: true, upsert: true }

    await UserModel.findOneAndUpdateAsync(query, updater, options)
  } catch (error) {
    throw new TypeError(error)
  }
}

module.exports = createUser
