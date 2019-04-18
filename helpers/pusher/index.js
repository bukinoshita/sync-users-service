// Helpers
const pusherConnection = require('./connection')

const sendPusherEvent = (name, type) => {
  if (name && type) {
    try {
      return pusherConnection().trigger(name, type, { name, type })
    } catch (error) {
      throw new TypeError(error)
    }
  }

  throw new TypeError('Name and type are required to send a pusher event')
}

module.exports = sendPusherEvent
