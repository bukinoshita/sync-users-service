# Log

> This file will contain my idea and thoughts when building this project.

## Apr 15 09:03PM

Read the challenge and create the `sync-users-service` repository.

## Apr 15 09:08PM

Decide what technology to use

- For database **MongoDB** because I'm more familiar with it
- Host the service on **Now**
- Express
- Mongoose
- CircleCI
- Mocha and supertest
- Ngrok: heard of, but never used

## Apr 15 09:10PM

Create new workspace (https://sync-users.slack.com)

## Apr 15 09:12PM

Create a new app and attach to workspace

## Apr 15 09:15PM

Understanding how the Events API works. Basically they will send a POST request with a `challenge` parameter and the API needs to return the challenge value.

## Apr 15 09:16PM

Need to create the project structure and the first endpoint to test the Events API

## Apr 15 09:28PM

Create the project structure

## Apr 15 9:31

Pause to solve work related stuffs

## Apr 15 10:10PM

We're back! Okay, need to create that endpoint to test the Events API. I was also thinking about creating a readme, but I'll leave that for later.

## Apr 15 10:23PM

Great! The endpoint is created and tested with ngrok

## Apr 15 10:30PM

Okay, i'm not receiving events when changing user data. The `request url` is verified and the workspace events were created. Need to figure it out how to trigger an event

## Apr 15 10:45PM

I figured it out that I needed to add the app to my workspace LOL

## Apr 15 10:48PM

Giving a break!

## Apr 15 11:38PM

I'm back! Next steps is to:

### Existing users from the workspace should be persisted to the database

I have an idea how to do it, but now sure it's the best one. The idea is to request the user list from slack and iterate through each user and save on database when the application starts. Not sure how scalable it is this approach, but I believe this should only run when the application first run.

I'll stick with this one for now.

### User updates should reflect in the user list view

I'm thinking to use Pusher to send events notifications to the front-end so everything updates in real-time. No need a pooling or a webhook, also not sure if slack api has an easy way of doing it.

## Apr 15 11:52PM

Giving another break, I'm not fully focused

## Apr 16 10:51PM

Configuring Now and CircleCI
