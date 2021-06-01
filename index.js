const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const charactersModel = require('./models/charactersModel');

const app = express();

app.use(bodyParser.json());

app.get('/characters', rescue(async (_req, res) => { //localhost:3000/characters
  try {
    const characters = await charactersModel.getAll();  
    res.status(200).json(characters);    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}));

app.post('/characters', rescue(async (req, res) => { //localhost:3000/characters /Body/JSON/{"name": "Pernalonga",	"cartoon": "As aventuras"}
  const { name, cartoon } = req.body;
  try {
    const result = await charactersModel.add(name, cartoon);
    
    const response = { id: result.insertId, name, cartoon }; //retornando oque foi inserido no banco de dados.
    res.status(201).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}));

app.get('/characters/:id', rescue(async(req, res) => { //localhost:3000/characters/4
  try {
    const { id } = req.params;  

    const result = await charactersModel.getById(id);
    
    if(!result) return res.status(404).json({ message: `characters ${id} não existe` }) 
    res.status(200).json(result); 
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}))

app.put('/characters/:id', rescue(async (req, res) => { //localhost:3000/characters/4 /Body/JSON/{"name": "Pernalongas",	"cartoon": "As aventuras OK"}
  try {
    const { name, cartoon } = req.body;
    const { id } = req.params;

    await charactersModel.update(id, name, cartoon);
    const result = { id, name, cartoon };
    res.status(201).json(result).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}));

app.delete('/characters/:id', rescue(async (req, res) => {
  try {
    const { id } = req.params;
    await charactersModel.exclude(id);   
    res.json({ message: `characters ${id} deletado com sucesso`}).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}));

const PORT = 3000;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));