const toReadAll = (model) => {
    return `SELECT * FROM posts`;
}

const toReadID = (model) => {
    return `SELECT * FROM posts WHERE postagem_id='${model.postagem_id}'`;
}

module.exports = {
    toReadAll,
    toReadID
}