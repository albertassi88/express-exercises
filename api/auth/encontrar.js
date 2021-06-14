const model = require('../../models/userModel');

const jwt = require('jsonwebtoken');

const secret = 'seusecretdetoken';

const jwtConfig = { //cria dia ou horas para expirar o token.
  expiresIn: '7d',
  algorithm: 'HS256',
}

const encontrar = async (req, res) => {
   
    const { username, password } = req.body;
   
    const user = await model.getAll(username); //busca o username e password cadastrado.
  
    const token = jwt.sign({ data: user }, secret, jwtConfig); //assinatura completa do token.
    const decoded = jwt.verify(token, secret);
    res.status(200).send(decoded);     
};
  
module.exports = encontrar;
