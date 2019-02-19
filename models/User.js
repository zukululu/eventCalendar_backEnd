const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
  email: String,
  password: String,
  events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event'
    }],
  picture: String
})

// mongoose.model('User', User)

module.exports = mongoose.model('User', User)