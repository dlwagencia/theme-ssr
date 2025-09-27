const express = require('express');
const HomeView = require('./views/home.js');
const notFoundView = require('./views/notFound.js');
const PostView = require('./views/post.js')
const server = express();

server.use(express.static('public'))
server.get('/post/:url', PostView)
server.get('/', HomeView);
server.get('/:page', notFoundView);

server.listen(80, () => {
  console.log('Site Rodando!');
});

