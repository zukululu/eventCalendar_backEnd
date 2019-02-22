const mongoose = require("mongoose");

if (process.env.NODE_ENV == "production") {
  mongoose.connect('https://lettuce-meat-api.herokuapp.com/events')
} else {
  mongoose.connect("mongodb://localhost/events");
}

mongoose.Promise = Promise;
module.exports = mongoose;