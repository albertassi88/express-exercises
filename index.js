const express = require('express');
const bodyParser = require('body-parser');

const peopleController = require('./controllers/peopleController');

const app = express();

app.use(bodyParser.json());

app.use('/people', peopleController); //express para tudo que começar com './people', você usa o peopleController.

const PORT = 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));