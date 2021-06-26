## ORM - Interface da aplicação com o banco de dados
### O ORM provê uma forma de, através de código JavaScript, alterar e interagir com um banco de dados de qualquer forma que for necessária.

## Sequelize - É uma biblioteca de mapeamento baseado em Promise para Node.

## npx sequelize help   //   aparece todos os comandos do sequelize

### Instalações:
#### npm init -y
#### npm i body-parser sequelize mysql2 express dotenv
#### npm i --save-dev sequelize-cli

### Comandos:
#### 1- sudo service mysql start     //iniciar o banco de dados mysql.
#### 2 - npx sequelize-cli init       //criar a estrutura do sequelize na aplicação.
#### 3 - npx sequelize migration:generate --name create-products-table      //criar a migration no sequelize com o nome da tabela.
#### 4 - entrar na pasta migrations e adicionar as informações da tabela no arquivo criado pelo migration. Obs: sempre que for adicionado novas informações na migrate, rodar o comando npx sequelize db:migrate para ser criado a tabela no banco de dados, caso queira desfazer a migrate(deletar a tabela), rodar o comando npx sequelize db:migrate:undo
#### 5 - npx sequelize seed:generate --name create-default-product   //criar o seeds na aplicação com o nome da tabela para quando iniciar o banco de dados, ele não esteja vazio.
#### 6 - entrar na pasta seeders e adicionar as informações da tabela no arquivo criado pelo seeders. Obs: sempre que for adicionado novas informações na seeders, rodar o comando npx sequelize db:seed:all para ser criado as informações na tabela no banco de dados, caso queira desfazer a seeders(deletar as informações da tabela), rodar o comando npx sequelize db:seed:undo:all
#### 7 - Obs: podemos criar a model com o comando npx sequelize model:generate --name product --attributes name:string description:string ou criar manualmente(nesse exemplo vamos criar manualmente), a model representa a tabela em nosso banco de dados.

### OBS: depois de criado uma tabela, no sequelize não é possível adicionar novas colunas nessa tabela, para adicionar uma nova coluna na tabela, temos que fazer uma nova migration conforme abaixo:

#### 8 - npx sequelize migration:generate --name create-column-userid-product-table  //criar uma coluna chamada price na tabela product
#### 9 - entrar na pasta migrations e adicionar as informações da coluna no arquivo criado pelo migration, entrar na pasta models e fazer a associacao na tabela. rodar o comando npx sequelize db:migrate para ser criado a tabela/coluna no banco de dados, caso queira desfazer a migrate(deletar a tabela), rodar o comando npx sequelize db:migrate:undo
