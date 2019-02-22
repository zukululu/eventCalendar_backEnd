const { Event, Comment } = require('../models/Event')
const User = require('../models/User')

User.find({}).remove( () => {
  Event.find({}).remove( () => {
    Comment.find({}).remove( () => {
      console.log('done')
    })
  })
})

Event.create({
  "title": "hello"
})
