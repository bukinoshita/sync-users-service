const buildUserSchema = user => {
  if (user && Object.keys(user).length > 0) {
    return {
      id: user.id,
      name: user.real_name,
      nickname: user.profile.display_name,
      title: user.profile.title,
      avatar: user.profile.image_72,
      lastUpdate: new Date(user.updated * 1000),
      deleted: user.deleted
    }
  }

  throw new TypeError('User object is required to build user schema')
}

module.exports = buildUserSchema
