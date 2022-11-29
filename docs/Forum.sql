DROP DATABASE IF EXISTS forum;
CREATE DATABASE forum charset=UTF8 collate utf8_general_ci;
USE forum;

CREATE TABLE usuarios(
    nome varchar(50) not null primary key unique,
    email varchar(70) not null,
    senha varchar(20) not null
);

CREATE TABLE categoria(
    categoria_id integer not null primary key,
    nome_categoria varchar(20) not null
);


CREATE TABLE posts(
    postagem_id integer not null primary key auto_increment,
    nome varchar(50) not null,
    data_post DATETIME not null,
    titulo varchar(100) not null,
    conteudo varchar(500) not null,
    FOREIGN KEY (nome) REFERENCES usuarios(nome)
);

CREATE TABLE comentarios(
    id_coment integer not null primary key auto_increment,
    nome varchar(50) not null,
    comentario_date DATETIME not null,
    postagem_id integer not null,
    resposta varchar(200) not null,
    foreign key (nome) references usuarios(nome),
    foreign key(postagem_id) references posts(postagem_id) on delete cascade
);


CREATE TABLE sub_comentarios(
    sub_id integer not null primary key auto_increment,
    id_coment integer not null,
    nome varchar(50) not null,
    sub_date DATETIME not null,
    subcoment varchar(200) not null,
    foreign key (nome) references usuarios(nome),
    foreign key (id_coment) references comentarios(id_coment) on delete cascade
);

describe usuarios;
describe categoria;
describe posts;
describe comentarios;
describe sub_comentarios;

show tables;


-------USUARIOS------
insert into usuarios values("Stalker", "stalker1@gmail.com", "1234");
insert into usuarios values("Bella", "anasilvestre@gmail.com", "5678");
insert into usuarios values("GhostFace", "marianagomes@gmail.com", "911");

select * from usuarios;

------CATEGORIAS--------
insert into categoria values(1,"Terror");
insert into categoria values(2,"Romance");
insert into categoria values(3,"Comedia");

select * from categoria;

--------POSTS----------

insert into posts values(1, "Stalker", curdate(), "Me indiquem um filme", "Estou procurando um novo filme para assistir, já terminei a minha maratona...");
insert into posts values(2, "Stalker", curdate(), "Novo filme", "Ja viram o fulanos filme, foi um romance com um pouco de terror, recomendo muito");
insert into posts values(3, "Bella", curdate(), "Reprovei", "Nunca pensei que um filme sobre uma garota quase reprovando na escola iria dar em romance!");
insert into posts values(4, "Ghostface", curdate(), "O que acharam?", "Sinceramente eu gostaria de perguntar o que voces acharam sobre o novo filme do GhostFace.");
insert into posts values(5, "Ghostface", curdate(), "Sera que vai ter outro temporada?", "Sera que vamos ter outra temporada de Chucky??");
insert into posts values(6, "Bella", curdate(), "Foi muito engraçado", "Hoje eu vi uma pessoa caindo e foi muito engraçado porque ela consegue cair sempre no mesmo lugar em horarios diferentes");

select * from posts;

--------COMENTARIO----------

insert into comentarios values(1,"Bella", curdate(),2, "SIM, ja vi o novo filme, achei incrivel a mistura de terror e romance o que equilibrou o filme perfeitamente");

select * from comentarios;

--------SUB_COMENTARIO----------

insert into sub_comentarios values(1,1,"Stalker", curdate(), "Eu espero muito ver outros filmes assim, se voce conseguir me indicar algum eu agradeço!");

select * from sub_comentarios;



-- create view vw_geral as 
-- SELECT p.id_profissa, p.nome, p.especialidade, c.consulta_id, c.paciente, c.horario, t.id_tratamento, t.tratamento, t.valor from profissas p 
-- inner join consultas c
-- on p.id_profissa = c.consulta_id
-- join tratamentos t
-- on  c.consulta_id = t.id_tratamento ;

-- select * from vw_geral;