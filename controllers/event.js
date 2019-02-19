const express = require('express')
const { Event, Comment } = require('../models/Event')
const User = require('../models/User')
const router = express.Router()

router.get('/', (req, res) => {
  User.find({})
  .then(user => {
    res.json(user)
  })
})

module.exports = router