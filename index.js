const multer = require('multer');
const express = require('express');
const { resolve } = require('path'); //criar um caminho para a pasta uploads.

const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

const app = express();

app.use(express.static(resolve(__dirname, 'uploads'))); //criar a pasta uploads e acessar.

const storage = multer.diskStorage({
    destination: (req, file, callback) => callback(null,'uploads/'),
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});

// const upload = multer ({ dest: './uploads'});
const upload = multer({ storage });

app.post('/files/upload', upload.single('file'),(req, res) => {
    const { body, file } = req;
    res.status(200).json({ body, file });
});

const stream = fs.createReadStream('./zap.jpg');

const formInfo = new FormData();
formInfo.append('file', stream);

const formHeaders = formInfo.getHeaders(); //ler o header da requisição.

const URL = 'http://localhost:4000/files/upload'
const dados = formInfo;

axios.post(URL, dados, {headers: { ...formHeaders }})
    .then(response => response)
    .catch(error => error);

const PORT = 4000;
app.listen(4000, () => console.log(`Servidor Rodando na porta ${PORT}`));