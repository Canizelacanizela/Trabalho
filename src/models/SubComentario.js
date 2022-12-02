const toReadAll = (model) => {
    return `SELECT * FROM sub_comentarios`;
}

const toCreate = (model) => {
    return `INSERT INTO sub_comentarios VALUES (default,'${model.id_coment}','${model.nome}',curdate(),'${model.subcoment}')`;
}

// const toDelete= (model) => {
//     return `DELETE FROM sub_comentarios WHERE id_user='${model.id_user}'`;
// }

module.exports = {
    toReadAll,
    toCreate
}