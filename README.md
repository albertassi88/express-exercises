## inserir no banco de dados

use wellRested
db.people.insertOne({ name: 'Ruben', age: 38 });
db.people.insertOne({ name: 'Luiz', age: 38 });



## instalações

npm init -y
npm i express body-parser express-rescue mongodb