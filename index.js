const express = require('express')
const app = express()

app.set('port', process.env.PORT || 3001)

app.listen(3001, () => console.log('Listening on port 3001 :)'))
//making new branch commit
//making branch off userAuth