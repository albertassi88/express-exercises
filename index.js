const express = require('express');
const app = express();
app.use(express.json());

const product = require('./routes/product');
const user = require('./routes/user');

app.use('/products', product);
app.use('/users', user);

app.listen(3000, () => console.log('Rodando....'));