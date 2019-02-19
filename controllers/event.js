const express = require('express')
const { Event, Comment } = require('../models/Event')
const User = require('../models/User')
const router = express.Router()

router.get('/', (req, res) => {
  Event.find({})
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
  Event.create({
    title: req.body.title,
    date: req.body.date,
    author: req.body.author,
    public: req.body.public
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
      content: req.body.content
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
  //need to add update to event 
  //need to add increments to attendees
})

module.exports = router