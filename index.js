console.log("test")
const express = require('express')
const app = express()
const port = 3000

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*var http = require('http');
     var fs = require('fs');

 //creating server
 http.createServer(function (req, res) {
   fs.readFile('index.html', function (err, html) {
     res.writeHead(200, { 'Content-Type': 'text/html' });
     res.write(html);
     res.end();

   });
 }).listen(8080);*/