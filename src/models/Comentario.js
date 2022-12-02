const toReadAll = (model) => {
    return `SELECT * FROM comentarios`;
}

const toCreate = (model) => {
    return `INSERT INTO comentarios VALUES (default,'${model.nome}',curdate(),'${model.postagem_id}','${model.resposta}')`;
}

const toDelete= (model) => {
    return `DELETE FROM comentarios WHERE id_coment='${model.id_coment}'`;
}

module.exports = {
    toReadAll,
    toCreate,
    toDelete
}