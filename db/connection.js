const mongoose = require("mongoose");

if (process.env.NODE_ENV == "production") {
  mongoose.connect('http://localhost:3000')
} else {
  mongoose.connect("mongodb://localhost/events");
}

mongoose.Promise = Promise;
module.exports = mongoose;