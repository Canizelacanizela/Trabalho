const con = require('../dao/ForumDAO.js');
const post = require('../models/Postagem.js');

const listarAll = (req, res) => {
    con.query(post.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

const listarID = (req, res) => {
    con.query(post.toReadID(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    listarAll,
    listarID,
}