// Services
const fetchSlackUsers = require('../../services/fetch-slack-users')

// Repositories
const createUser = require('../../repositories/create-user')

const populateDatabase = async () => {
  const users = await fetchSlackUsers()
  users.map(user => createUser(user))
}

module.exports = populateDatabase
