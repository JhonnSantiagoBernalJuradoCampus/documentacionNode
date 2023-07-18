/*Creamos la base de datos*/
CREATE DATABASE db_campus;
/*La usamos*/
USE db_campus;
/*Creamos la tabla*/
CREATE TABLE tb_information(
id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
nom_com VARCHAR(30) DEFAULT 'Camper' NOT NULL,
edad INTEGER DEFAULT 18 NOT NULL
);