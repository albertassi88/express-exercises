const express = require('express');
const bodyParser = require('body-parser');

const productController = require('./controllers/productController');

const app = express();

app.use(bodyParser.json());

app.use('/products/', productController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Porta ${PORT}`));