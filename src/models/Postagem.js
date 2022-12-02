const toReadAll = (model) => {
    return `SELECT * FROM posts`;
}

const toReadID = (model) => {
    return `SELECT * FROM posts WHERE postagem_id='${model.postagem_id}'`;
}

const toCreate = (model) => {
    return `INSERT INTO posts VALUES (default,'${model.nome}',curdate(),'${model.titulo}','${model.conteudo}')`;
}

const toDelete= (model) => {
    return `DELETE FROM posts WHERE postagem_id='${model.postagem_id}'`;
}

module.exports = {
    toReadAll,
    toReadID,
    toCreate,
    toDelete
}