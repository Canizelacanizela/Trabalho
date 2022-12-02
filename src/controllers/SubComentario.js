const con = require('../dao/ForumDAO.js');
const sub = require('../models/SubComentario');

const listarAll = (req, res) => {
    con.query(sub.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

const criarSubComentario = (req, res) => {
    con.query(sub.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    listarAll,
    criarSubComentario
}