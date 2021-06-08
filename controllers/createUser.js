const model = require('../models/user');

const createUser = async (req, res) => {
  try {
      const username = await model.registerUser(
      req.body.username,
      req.body.password
    );
    if (!username) throw Error;
      res.status(201).json({ message: 'Novo usuário criado com sucesso', user: username });
  } catch (err) {
      res.status(500).json({ message: 'Erro ao salvar o usuário no banco', error: err });
  }
};


module.exports = createUser;