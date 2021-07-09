const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const http = require('http').createServer();
const socket = require('socket.io');

const io = socket(http, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/client.html');
});

app.post('/notify', (req, res) => {
    const { title, message } = req.body;

    if(!title || !message) return res.status(422).json({ message: 'Missing title or message' });

    io.emit('notification', { title, message }); //emitir uma notificação

    res.status(200).json({ message: 'Notification emitted' });
});

app.get('/ping', (_, res) => {
    res.status(200).json({ message: 'pong!' });
});

app.listen(3000, () => console.log('Express: Rodando na porta 3000.')); //servidor express

http.listen(4555, () => console.log('Socket.io: Rodando na porta 4555.'));  //servidor http