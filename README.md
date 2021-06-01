## Banco de Dados MySql

CREATE DATABASE IF NOT EXISTS live_lecture_21_1;

USE live_lecture_21_1;

DROP TABLE characters;

CREATE TABLE characters (
	id INT unsigned NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    cartoon VARCHAR(40) NOT NULL,
    CONSTRAINT pk_characters PRIMARY KEY (id)
);	

INSERT INTO `live_lecture_21_1`.`characters`(`name`, `cartoon`) 
VALUES ('Abigail', 'Turma do Bairro'),
('Corvo', 'Solar'),
('Dexter', 'Laboratório de Dexter')


### Instalações

npm i express body-parser express-rescue mysql2
npm i nodemon -D
