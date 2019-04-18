/* eslint-disable camelcase */

// Packages
const assert = require('assert')
const request = require('supertest')

// Server
const server = require('../../../server')

// Helpers
const resetDatabase = require('../../../helpers/reset-database')

describe('Slack new', () => {
  beforeEach(done => {
    resetDatabase()
      .then(done)
      .catch(done)
  })

  it('should return the sent challenge', done => {
    const payload = { challenge: 'sync-users' }

    request(server)
      .post('/slack/new')
      .send(payload)
      .expect(200)
      .end((error, res) => {
        if (error) {
          console.error({ error })
          return done(error)
        }

        assert.strictEqual(res.body.challenge, payload.challenge)

        done()
      })
  })

  it('should add user event', done => {
    const payload = {
      event: {
        user: {
          id: 7921,
          real_name: 'Bu Kinoshita',
          name: 'bukinoshita',
          profile: { image_72: 'https:' }
        }
      }
    }

    request(server)
      .post('/slack/new')
      .send(payload)
      .expect(200)
      .end((error, res) => {
        if (error) {
          console.error({ error })
          return done(error)
        }

        assert.strictEqual(res.body.message, 'User updated')

        done()
      })
  })
})
