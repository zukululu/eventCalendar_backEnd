const express = require('express')
const app = express()

app.use(require('./controllers/event.js'))
app.listen(3001, () => console.log('Listening on port 3001 :)'))