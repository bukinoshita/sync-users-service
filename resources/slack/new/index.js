const newSlack = (req, res, next) => {
  req
    .assert('challenge', 'Password is required')
    .optional()
    .notEmpty()
  req
    .assert('event')
    .optional()
    .notEmpty()

  const errors = req.validationErrors()

  if (errors) {
    return res.status(400).send({ error: { message: errors[0].msg } })
  }

  return next()
}

module.exports = newSlack
