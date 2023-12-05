
// on CMD, run 
// npm start 

console.log('node demo works!');

// copied from - 
// https://www.npmjs.com/package/express

const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)