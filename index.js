const express = require('express');
const bodyParser = require('body-parser');

const storeController = require('./controllers/storeController');

const app = express();

app.use(bodyParser.json());

app.get('/store', storeController.getAll);
app.get('/store/:id', storeController.getById);
app.post('/store', storeController.create);
app.put('/store/:id', storeController.update);
app.delete('/store/:id', storeController.remove);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Porta ${PORT}`));