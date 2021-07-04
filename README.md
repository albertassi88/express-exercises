## Instalações:
### npm init -y
### npm i body-parser sequelize mysql2 express dotenv

## Comandos:
### 1- sudo service mysql start //iniciar o banco de dados mysql.
### 2 - npx sequelize-cli init //criar a estrutura do sequelize na aplicação.
### 3 - npx sequelize db:create   //criar o banco de dados que foi nomeado no config.js
### 4 - npx sequelize migration:generate --name create-products-table //criar a migration no sequelize com o nome da tabela.
### 5 - entrar na pasta migrations e adicionar as informações da tabela no arquivo criado pelo migration. Rodar o comando npx sequelize db:migrate para ser criado a tabela no banco de dados, caso queira desfazer a migrate(deletar a tabela), rodar o comando npx sequelize db:migrate:undo
### 6 - npx sequelize seed:generate --name create-default-product //criar o seeds na aplicação com o nome da tabela para quando iniciar o banco de dados, ele não esteja vazio.
### 7 - entrar na pasta seeders e adicionar as informações da tabela no arquivo criado pelo seeders. Rodar o comando npx sequelize db:seed:all para ser criado as informações na tabela no banco de dados, caso queira desfazer a seeders(deletar as informações da tabela), rodar o comando npx sequelize db:seed:undo:all.
### 8 - Obs: podemos criar a model com o comando npx sequelize model:generate --name product --attributes name:string description:string ou criar manualmente(nesse exemplo vamos criar manualmente), a model representa a tabela em nosso banco de dados.

## Definindo as associações Sequelize

## A.hasMany(B); // A hasMany B















