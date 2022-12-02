const express = require('express');
const Router = express.Router();

const Comen = require('../controllers/ComentarioController.js');

Router.get('/forum/comentarios', Comen.listarAll);
Router.post('/forum/comentario', Comen.criarComentario);
Router.delete('/forum/comentario/:id_coment', Comen.ExcluirComentario);

module.exports = Router;