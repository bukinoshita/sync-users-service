// Packages
const Pusher = require('pusher')

// Config
const { pusher } = require('../../config')

const pusherConnection = () => {
  const { appId, key, secret, cluster } = pusher

  const pusherChannel = new Pusher({
    appId,
    key,
    secret,
    cluster
  })

  return pusherChannel
}

module.exports = pusherConnection
