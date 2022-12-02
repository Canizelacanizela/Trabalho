const express = require('express');
const Router = express.Router();

const User = require('../controllers/UsuarioController.js');

Router.get('/forum/usuarios', User.listarUsuario);
Router.get('/forum/usuarios/:email', User.listarEmail);
Router.get('/forum/usuarios/:id_user', User.listarID);
Router.post('/forum/usuario', User.cadastrarUsuario);
Router.delete('/forum/usuario/:id_user', User.ExcluirUser);

module.exports = Router;