const { Event } = require('../models/Event')
const User = require('../models/User')

User.create({
  email: 'hi@google.com',
  password: 'bye' })
  .then( newUser => {
    Event.create({
      title: 'Make a sample'
    }).then(newEvent => {
      newUser.events.push(newEvent)
      newUser.save()
    })
  })

  console.log('done')