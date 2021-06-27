const express = require('express');
const { Product, User } = require('../src/models');
const router = express.Router();

router.get('/', (req, res, next) => {
	Product.findAll().then((products) => {
		res.status(200).json(products);
	}).catch((err) => {
		console.log(err.message);
		res.status(500).json({ message: 'Algo deu errado' });
	});
});

router.get('/:id', (req, res, next) => {
	Product.findByPk(req.params.id, {
		//Eager Loading = todas as informações da request são trazidas
		include: { model: User, as: 'user', attributes: {exclude: ['password']} }, //inclui na pesquisa o relacionamento com os dados do user e exclui na pesquisa o campo password  
		attributes: { exclude: [ 'userId' ] }  //exclui na pesquisa o campo userId
	}).then((product) => {
		if (product === null) {
			res.status(404).send({ message: 'Produto não encontrado' });
		}
		res.status(200).json(product);
	}).catch((err) => {
		console.log(err.message);
		res.status(500).json({ message: 'Algo deu errado' });
	});
});

router.post('/', (req, res) => {
	const { name, description, price, userId } = req.body;

	Product.create({ name, description, price, userId }).then((newProduct) => {
	    res.status(200).json(newProduct);
	}).catch((err) => {
		console.log(err.message);
		res.status(500).send({ message: 'Algo deu errado' });
	});
});

router.put('/:id', (req, res) => {
	const { name, description, price, userId } = req.body;
	const { id } = req.params;
	Product.update({ name, description, price, userId },{where: {id}}).then((products) => {
		res.status(200).send({ message: 'Produto atualizado com sucesso.' });
	})
	.catch((err) => {
		console.log(err.message);
		res.status(500).send({ message: 'Algo deu errado' });
	});
});

router.delete('/:id', (req, res) => {
	Product.destroy({where: {id: req.params.id} }).then((products) => {
		res.status(200).send({ message: 'Produto excluído com sucesso.' });
	})
	.catch((err) => {
		console.log(err.message);
		res.status(500).send({ message: 'Algo deu errado' });
	});
});

module.exports = router;