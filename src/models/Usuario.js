const toCreate = (model) => {
    return `INSERT INTO usuarios VALUES ('${model.nome}','${model.email}','${model.senha}')`;
}

const toReadAll = (model) => {
    return `SELECT * FROM usuarios`;
}

const toRead = (model) => {
    return `SELECT * FROM usuarios WHERE email='${model.email}'`;
}

const toReadNome = (model) => {
    return `SELECT * FROM usuarios WHERE nome='${model.nome}'`;
}

module.exports = {
    toCreate,
    toReadAll,
    toRead,
    toReadNome
}