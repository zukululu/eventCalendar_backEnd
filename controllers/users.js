const express = require('express')
const router = express.Router()
const jwt = require('jwt-simple')
// const passport = require('../config/passport')()
// const passport = require('passport')
const config = require('../config/config')
const mongoose = require('../models/User')
const User = mongoose.model('User')

router.get('/', (req, res) =>{
  User.find({})
  .then( users => {
    res.json( users )
  })
})

router.get('/:id', (req, res) => {
  User.findOne({id: req.params._id})
  .then( user => {
    res.json( user )
  })
})

router.post('/signup', (req, res) => {
  if (req.body.email && req.body.password) {
    let newUser = {
      email: req.body.email,
      password: req.body.password
    }
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          User.create(newUser)
            .then(user => {
              if (user) {
                var payload = {
                  id: newUser.id
                }
                var token = jwt.encode(payload, config.jwtSecret)
                res.json({
                  token: token,
                  id: newUser.id
                })
              } else {
                res.sendStatus(401)
              }
            })
        } else {
          res.sendStatus(401)
        }
      })
  } else {
    res.sendStatus(401)
  }
})

router.post('/login', (req, res) => {
  if (req.body.email && req.body.password) {
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        if (user.password === req.body.password) {
          var payload = {
            id: user.id
          }
          var token = jwt.encode(payload, config.jwtSecret)
          res.json({
            token: token,
            id: user.id
          })
        } else {
          res.sendStatus(401)
        }
      } else {
        res.sendStatus(401)
      }
    })
  } else {
    res.sendStatus(401)
  }
})

module.exports = router