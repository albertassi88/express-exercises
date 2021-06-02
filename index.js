const express = require('express');
const bodyParser = require('body-parser');

const songController = require('./controllers/songController');
const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(bodyParser.json());

app.get('/songs', songController.getAll);
app.get('/songs/:id', songController.getById);
app.post('/songs', songController.create);
app.put('/songs/:id', songController.update);
app.delete('/songs/:id', songController.remove);

app.use(errorMiddleware);

const PORT = 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));