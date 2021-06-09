const express = require('express');
const multer = require('multer');
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
})
const upload = multer({ storage });

app.post('/files/upload', upload.single('file'),(req, res) => {
    res.status(200).json({ message: "Rota para envio de arquivo" });
});
const stream = fs.createReadStream('./zap.png');


const formInfo = new FormData();
formInfo.append('file', stream);

const formHeaders = formInfo.getHeaders(); //ler o header da requisição.

const URL = 'http://localhost:3000/files/upload'
const dados = formInfo;

axios.post(URL, dados, {headers: { ...formHeaders }})
    .then(response => response)
    .catch(error => error);

const PORT = 3000;
app.listen(3000, () => console.log(`Servidor Rodando na porta ${PORT}`));