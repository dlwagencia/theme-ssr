require('dotenv').config();
const express = require('express');
const Theme = require('./theme.js');
const server = express();
const theme = new Theme();
const port = process.env.PORT || 80;

server.use(express.static('public'))
server.get('/post/:url', theme.post)
server.get('/', theme.home);
server.get('/:page', theme.error);

server.use((err, req, res, next) => {
  res.status(500).send(err.message + " - " + err.stack);
});
server.listen(port, () => {
  console.log('Site Rodando!');
});

