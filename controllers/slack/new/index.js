// Repositories
const updateUser = require('../../../repositories/update-user')

// Services
const buildUserSchema = require('../../../services/build-user-schema')

// Helpers
const pusher = require('../../../helpers/pusher')
const {
  PUSHER_CHANNEL_USER_UPDATE,
  PUSHER_EVENT_NEW_UPDATE
} = require('../../../helpers/constants')

const slackNew = async (req, res) => {
  const { challenge, event } = req.body

  if (challenge) {
    return res.status(200).send({ challenge })
  }

  try {
    const user = buildUserSchema(event.user)
    await updateUser(user)
    pusher(PUSHER_CHANNEL_USER_UPDATE, PUSHER_EVENT_NEW_UPDATE)

    res.status(200).send({ message: 'User updated' })
  } catch (error) {
    res.status(400).send({ error: { message: error } })
  }
}

module.exports = slackNew
