// Repositories
const getUsers = require('../../../repositories/get-users')

const get = async (req, res) => {
  const users = await getUsers()

  res.status(200).send({ data: users })
}

module.exports = get
