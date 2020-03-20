'use strict';

const express = require('express');
const message = require('./message');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(message.helloWorldMessage());
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);