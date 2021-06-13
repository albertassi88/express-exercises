const model = require('../models/user');

const createUser = async (req, res) => {
  const { username, password } = req.body;

  try {
      const user = await model.create(username, password)
    
      if (!user) {
        return res.status(422).json({message: 'Missing fields'});
      }

      res.status(201).json({ message: 'Novo usuário criado com sucesso', user: user });
  } catch (err) {
      res.status(500).json({ message: 'Erro ao salvar o usuário no banco', error: err });
  }
};

module.exports = createUser;