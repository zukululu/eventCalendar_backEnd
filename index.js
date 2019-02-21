const express = require('express')
const parser = require('body-parser')
const app = express()
const passport = require('./config/passport')()
const userController = require('./controllers/users.js')
const eventController = require('./controllers/event')
const cors = require('cors')

app.use(cors())
app.use(parser.json())
app.use(passport.initialize())
app.use('/users', userController)
app.use('/events',  eventController)
app.listen(3001, () => console.log('Listening on port 3001 :)'))