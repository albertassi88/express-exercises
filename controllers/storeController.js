const { Store } = require("../src/models");

const getAll = async (req, res) => {
    Store.findAll().then(dados => {
        res.status(200).json(dados);    
    }).catch(erro => {
        console.log(erro.message);
        res.status(500).json({ message: 'Algo deu errado!' });
    })
};

const getById = async (req, res) => {   
  const { id } = req.params;

  Store.findByPk(id).then(dados => {
    res.status(200).json(dados);    
  }).catch(erro => {
    console.log(erro.message);
    res.status(500).json({ message: 'Algo deu errado!' });
  })
};

const create = async (req, res) => {
  const { name, description } = req.body;

  Store.create({name, description}).then(dados => {
    res.status(200).json(dados);    
  }).catch(erro => {
    console.log(erro.message);
    res.status(500).json({ message: 'Algo deu errado!' });
  })
};

const update = async (req, res) => {
  const { name, description } = req.body;
  const { id } =  req.params;

  Store.update({name, description}, {where: {id}}).then(dados => {
    res.status(200).json(dados);    
  }).catch(erro => {
    console.log(erro.message);
    res.status(500).json({ message: 'Algo deu errado!' });
  })
};

const remove = async (req, res) => { 
  try {
    const { id } = req.params;
    const store = await Store.findByPk(id);
    await store.destroy();
    res.status(200).json(store);
  } catch (erro) {
    console.log(erro.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};