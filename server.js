const express = require('express');
const app = express();
const cors = require('cors'); //é um mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens. 
const http = require('http').createServer(app);

const io = require('socket.io')(http, {  //iniciando um servidor do tipo socket
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST']
  }
});

app.use(cors());

io.on('connection', (socket) => { 
  io.emit('message', `${socket.id} acabou de entrar.`)

  socket.on('disconnect', () => {
    console.log('Alguém desconectou')
  })

  socket.on('mensagem', (msg) => { //recebendo o evento 'mensagem' do client.html (frontend)
    io.emit('serverMessage', { message: msg })
  });

  socket.emit('message', 'Seja bem vindo(a) ao TrybeChat'); //emitindo um evento 'message' para o client.html

  socket.broadcast.emit('serverMessage', {message: 'nova conexão'}) //envia a mensagem para todos que estão conectados, exeto para o novo que acabou de se conectar;
});
  

app.get('/', (req, res) => { //quando acessar essa rota ele vai chamar o arquivo client.html 
  res.sendFile(__dirname+'/client.html');
});

http.listen(3000, () => console.log('Rodando na porta 3000'));