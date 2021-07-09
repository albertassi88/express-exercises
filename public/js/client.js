const socket = io('http://localhost:4555');

const createMessage = (data) => {
    const messagesUl = document.querySelector('#notificacoes');
    const li = document.createElement('li');
    li.textContent = `${data.title}: ${data.message}`;
    messagesUl.appendChild(li);
};

socket.on('notification', (data) => createMessage(data));