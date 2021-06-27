const express = require('express');
const bodyParser = require('body-parser');

const controller = require('./controllers/');

const app = express();

app.use(bodyParser.json());

app.use('/products/', controller.product);
app.use('/users/', controller.user);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Porta ${PORT}`));