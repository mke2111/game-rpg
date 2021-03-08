var express = require('express');
var app = express();
var path = require('path');

const DIST_DIR = path.join(__dirname, '/build');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.get('/', function (req, res) {
  // res.sendFile(path.join(__dirname, 'index.html'));
  res.sendFile(HTML_FILE);
});

app.listen(process.env.PORT || 4000, function () {
  console.log('Node app is working!');
});

// const path = require('path');
// const express = require('express');

// const app = express();
// const DIST_DIR = path.join(__dirname, '/build');
// const HTML_FILE = path.join(DIST_DIR, 'index.html');

// app.use(express.static(DIST_DIR));
// app.get('*', (req, res) => {
//   res.sendFile(HTML_FILE);
// });

// const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {
//   console.log('Node app is working!');
// });