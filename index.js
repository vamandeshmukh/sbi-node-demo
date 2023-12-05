
console.log('node demo works!');

// steps 
// 1. copy from - 
// https://www.npmjs.com/package/express
// 2. edit package.json 
// 3. run npm install on cmd 
// 4. run on cmd npm start 


const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)