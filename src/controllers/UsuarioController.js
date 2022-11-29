const con = require('../dao/ForumDAO.js');
const user = require('../models/Usuario.js');

const listarUsuario = (req, res) => {
    con.query(user.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

const listarEmail = (req, res) => {
    con.query(user.toRead(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

const listarNome = (req, res) => {
    con.query(user.toReadNome(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

const cadastrarUsuario = (req, res) => {
    con.query(user.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}


module.exports = {
    listarUsuario,
    listarNome,
    listarEmail,
    cadastrarUsuario
}