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

router.get('/events/:id', (req, res) => {
  Event.findOne({ id: req.params._id })
  .then( event => {
    res.json(event)
  })
})

module.exports = router