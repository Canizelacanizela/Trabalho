const toCreate = (model) => {
    return `INSERT INTO usuarios VALUES (default,'${model.nome}','${model.email}','${model.senha}')`;
}

const toDelete= (model) => {
    return `DELETE FROM usuarios WHERE id_user='${model.id_user}'`;
}

const toReadAll = (model) => {
    return `SELECT * FROM usuarios`;
}

const toRead = (model) => {
    return `SELECT * FROM usuarios WHERE email='${model.email}'`;
}

const toReadID = (model) => {
    
    return `SELECT * FROM usuarios WHERE id_user=${model.id_user}`;
}


module.exports = {
    toCreate,
    toReadAll,
    toRead,
    toReadID,
    toDelete
}