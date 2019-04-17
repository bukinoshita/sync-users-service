// Packages
const axios = require('axios')

// Config
const { slackToken } = require('../../config')

const fetchSlackUser = async () => {
  const endpoint = 'https://slack.com/api/users.list'

  try {
    const { data } = await axios(`${endpoint}?token=${slackToken}`)

    if (data && data.members && data.members.length > 0) {
      return data.members
    }

    throw new TypeError('Ops, something went wrong')
  } catch (error) {
    throw new TypeError(error)
  }
}

module.exports = fetchSlackUser
