const express = require('express');
const http = require('http')
const path = require('path')

const app = express();


// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname + './client/index.html'));
// });

app.use(express.static(__dirname + '/client/dist'))

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'index.html'))
})

const port = 8000;


app.listen(port, () => `Server running on port ${port}`); 