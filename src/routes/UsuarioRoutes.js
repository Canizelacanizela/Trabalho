const express = require('express');
const Router = express.Router();

const User = require('../controllers/UsuarioController.js');

Router.get('/forum/usuarios', User.listarUsuario);
Router.get('/forum/usuarios/:email', User.listarEmail);
Router.get('/forum/usuarios/:nome', User.listarNome);
Router.post('/forum/usuario', User.cadastrarUsuario);

module.exports = Router;