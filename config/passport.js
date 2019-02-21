const passport = require('passport')
const passportJWT = require('passport-jwt')
const ExtractJwt = passportJWT.ExtractJwt
const Strategy = passportJWT.Strategy

const config = require('./config')

const mongoose = require('../models/User')
const User = mongoose.model('User')

const params = {
  secretOrKey: config.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

module.exports = function () {
  console.log('init strategy')
  let strategy = new Strategy(params, (payload, callback) => {
    console.log(params)
    console.log(payload)
    let user = User.findById(payload.id) || null
    if (user) {
      console.log('found user', user)
      return callback(null, { id: user.id })
    } else {
      return callback(new Error('User not found'), null)
    }
  })

  passport.use(strategy)

  return {
    initialize: function () {
      console.log('initialize called')
      return passport.initialize()
    },
    authenticate: function () {
      console.log('authenticate called')
      return passport.authenticate('jwt', { session: false })
    }
  }
}