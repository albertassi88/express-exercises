const multer = require('multer');
const express = require('express');

const upload = multer ({ dest: './uploads'});

const app = express();

// upload.nome -> nada
// upload.* -> req.files
// upload.single -> req.file

app.post('/files/upload', upload.single('file'),(req, res) => {
    const { body, file } = req;
    res.status(200).json({ body, file });
});

app.use((err, _req, res, _next) => { //Erro
    console.log(err);
    res.status(500).json({ message: err.message });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor Rodando na porta ${PORT}`));