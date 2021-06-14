const model = require('../models/userModel');
const jwt = require('jsonwebtoken');

const secret = 'seusecretdetoken';

const jwtConfig = { //cria dia ou horas para expirar o token.
  expiresIn: '7d',
  algorithm: 'HS256',
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
 
    if (!username || !password) return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });

    const user = await model.getAll(username); //busca o username e password cadastrado.

    // const { password: newPassword, ... newObject } = user; //rest parameters (forma ideal de fazer)
   
    if (!user || user.password !== password) return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });

    const token = jwt.sign({ data: user }, secret, jwtConfig); //assinatura completa do token.
    console.log(token)
    const decoded = jwt.verify(token, segredo);
    // console.log(decoded)
    res.status(200).json({ token }); //Por fim, nós devolvemos esse token ao usuário.

  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
};

module.exports = login;
