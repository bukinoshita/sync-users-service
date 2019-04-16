const slackNew = (req, res) => {
  const { challenge } = req.body

  if (challenge) {
    return res.status(200).send({ challenge })
  }

  res.status(400)
}

module.exports = slackNew
