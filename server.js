const express = require('express');

const app = express();
const path = require('path');

const DIST_DIR = path.join(__dirname, '/build');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.listen(process.env.PORT || 4000, () => {
  console.log('Node app is working!');
});
