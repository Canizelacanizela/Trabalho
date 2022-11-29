const express = require('express');
const Router = express.Router();

const Post = require('../controllers/PostagemController.js');

Router.get('/forum/posts', Post.listarAll);
Router.get('/forum/posts/:postagem_id', Post.listarID);

module.exports = Router;