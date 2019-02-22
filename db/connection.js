const mongoose = require("mongoose");

if (process.env.NODE_ENV == "production") {
  mongoose.connect('https://dashboard.heroku.com/apps/lettuce-meat-api')
} else {
  mongoose.connect("mongodb://localhost/events");
}

mongoose.Promise = Promise;
module.exports = mongoose;