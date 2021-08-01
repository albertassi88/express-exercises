const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const peopleController = require('../back-end/src/controllers/peopleController');

const app = express();

app.use(bodyParser.json());

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use('/people', peopleController); 

const PORT = 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));