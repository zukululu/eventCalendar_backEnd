const express = require('express')
const { Event, Comment } = require('../models/Event')
const User = require('../models/User')
const router = express.Router()

router.get('/', (req, res) => {
  Event.find({})
  .sort( { date: -1 } )
  .then(event => {
    res.json(event)
  })
})

router.get('/:id', (req, res) => {
  Event.findOne({ id: req.params._id })
  .then( event => {
    res.json(event)
  })
})

router.delete('/:id', (req, res) => {
  console.log('hello')
  Event.findOneAndRemove({ id: req.params._id})
  .then( () => {
    res.send('hello')
  })
})

router.post('/new', (req, res) => {
  console.log(req.body)
  Event.create({
    title: req.body.title,
    date: req.body.date,
    author: req.body.author,
    location: req.body.location,
    description: req.body.description,
    cover: req.body.cover,
    public: req.body.public,
    attendees: req.body.attendees
  })
  .then( result => {
    User.findOne({ _id: result.author })
    .then( user => {
      user.events.push(result)
      user.save(
        result.save()
      )
    })
    .then( () => {
      res.redirect(`${result._id}`)
    })
  })
})

router.post('/:id', (req, res) => {
  Event.findOne({ id: req.params._id })
  .then( event => {
    Comment.create({
      content: req.body.content,
      author: req.body.author
    })
    .then( newComment => {
      event.comments.push(newComment)
      event.save( done => {
        res.redirect(`${req.params.id}`)
      })
    })
  })
})

router.put('/:id', (req, res) => {
  Event.findOneAndUpdate({ id: req.params._id}, 
    { $set: {
      title: req.body.title,
      date: req.body.date,``
      description: req.body.description,
      location: req.body.location
    }})
    .then( event => {
      res.redirect(`/${req.params._id}`)
    })
})

module.exports = router