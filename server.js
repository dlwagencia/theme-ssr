require('dotenv').config();
const fs = require('fs');
const express = require('express');
const Theme = require('./theme.js');
const cors = require('cors');
const server = express();
const theme = new Theme();
const port = process.env.PORT || 80;

server.use(cors({
    origin: ['http://localhost','https://dlw.dev.br','http://dlw.dev.br'],
    optionsSuccessStatus : 200 
}));

server.use(express.static('public'))
server.use(express.json());
server.get('/not-found', theme.error);
server.get('/', theme.index);
server.get('/blog', theme.blog);
server.get('/blog/:post', theme.post);
server.post('/api/contact', theme.api_contact);
server.get('/:page/:subpage', theme.page);
server.get('/:page', theme.page);
server.get('/post/:url', theme.post);


server.use((err, req, res, next) => {
  res.status(500).send(err.message + " - " + err.stack);
});
server.listen(port, () => {
  console.log('Site Rodando!');
});

const options = {
  cert: fs.readFileSync('/etc/letsencrypt/live/dlw.dev.br/fullchain.pem'),
  key: fs.readFileSync('/etc/letsencrypt/live/dlw.dev.br/privkey.pem')
};

https.createServer(options, server).listen(443);