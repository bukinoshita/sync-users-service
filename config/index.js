module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database: process.env.DATABASE,
  slackToken: process.env.SLACK_TOKEN,
  pusher: {
    appId: process.env.PUSHER_APP_ID,
    key: process.env.PUSHER_KEY,
    secret: process.env.PUSHER_SECRET,
    cluster: process.env.PUSHER_CLUSTER
  }
}
