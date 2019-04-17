const buildUserSchema = user => {
  if (user && Object.keys(user).length > 0) {
    return {
      id: user.id,
      name: user.real_name,
      nickname: user.name,
      avatar: user.profile.image_72
    }
  }

  throw new TypeError('User object is required to build user schema')
}

module.exports = buildUserSchema
