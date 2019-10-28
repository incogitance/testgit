var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World')
})

//Define request response in About URL (/about)
app.get('/about', function (req, res) {
    res.send('Hello World, you can now see the about page!!!')
  })

//Launch listening server on port 8080
app.listen(8080, function () {
  console.log('App listening on port 8080!')
})