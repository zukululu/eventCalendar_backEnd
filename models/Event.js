const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const Comment = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
})

const Event = new Schema({
  title: String,
  date: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  comments: [Comment],
  public: Boolean,
  attendees: Number,
  cover: Number,
  description: String,
  location: String
})


module.exports = {
  Event: mongoose.model('Event', Event),
  Comment: mongoose.model('Comment', Comment)
}