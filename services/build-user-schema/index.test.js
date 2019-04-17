/* eslint-disable camelcase */

// Packages
const assert = require('assert')

// Controllers
const buildUserSchema = require('.')

describe('services: build user schema', () => {
  it('should build the user schema', done => {
    const payload = {
      id: 7921,
      real_name: 'Bu Kinoshita',
      name: 'bukinoshita',
      profile: { image_72: 'https://google.com' },
      nice: 2
    }

    const { id, name, nickname, avatar } = buildUserSchema(payload)

    assert.strictEqual(id, payload.id)
    assert.strictEqual(name, payload.real_name)
    assert.strictEqual(nickname, payload.name)
    assert.strictEqual(avatar, payload.profile.image_72)

    done()
  })

  it('should throw an error when building with an empty user', done => {
    const payload = {}

    assert.throws(() => buildUserSchema(payload), Error)
    assert.throws(() => buildUserSchema(payload), {
      name: 'TypeError',
      message: 'User object is required to build user schema'
    })

    done()
  })
})
