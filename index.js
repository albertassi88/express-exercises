const express = require('express');
const app = express();
app.use(express.json());

const error = require('./middleaware/error');

const users = require('./routes/user');
const logins = require('./routes/login');

app.use('/user/', users);
app.use('/login/', logins);

app.use(error);

app.listen(3000, () => console.log('ouvindo porta 3000!'));