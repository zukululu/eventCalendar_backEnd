const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Event = new Schema({
  title: String,
  date: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  comments: [Comment]
})

const Comment = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = {
  Event: mongoose.model('Event', Event),
  Comment: mongoose.model('Comment', Comment)
}