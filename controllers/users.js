const express = require('express')
const router = express.Router()
const jwt = require('jwt-simple')
const passport = require('../config/passport')
const config = require('../config/config')
const mongoose = require('../models/User')
const User = mongoose.model('User')


module.exports = router