
console.log('node demo works!');

// steps 
// 1. copy from - 
// https://www.npmjs.com/package/express
// 2. edit package.json 
// 3. run npm install on cmd 
// 4. run on cmd npm start 
// 5. view the output on browser - 
// http://localhost:3000/
// 6. to stop - 
// Ctrl + C Y 

const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)