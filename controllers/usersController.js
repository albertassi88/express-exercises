const express = require('express');
const { User } = require('../src/models/');
const router = express.Router();

router.get('/', (req, res, next) => {
	User.findAll().then((users) => {
		res.status(200).json(users);
	}).catch((err) => {
		console.log(err.message);
		res.status(500).json({ message: 'Algo deu errado' });
	});
});

router.get('/:id', (req, res, next) => {
	User.findByPk(req.params.id).then((user) => {
		if (user === null) {
			res.status(404).send({ message: 'Usuário não encontrado' });
		}
		//Lazy Loading
		if (!req.query.qualquerNome) return res.status(200).json(user); //se no req.query não tiver o parâmetro qualquerNome
		return user.getProducts().then((products) => { //se no req.query for passado o parâmetro qualquerNome
			res.status(200).json({ ...user.dataValues, products });
		});
	}).catch((err) => {
		console.log(err.message);
		res.status(500).json({ message: 'Algo deu errado' });
	});
});

router.post('/', (req, res) => {
	const { name, username, email, password } = req.body;

	User.create({ name, username, email, password }).then((newUser) => {
	    res.status(200).json(newUser);
	}).catch((err) => {
		console.log(err.message);
		res.status(500).send({ message: 'Algo deu errado' });
	});
});

router.put('/:id', (req, res) => {
	const { name, username, email, password } = req.body;
	const { id } = req.params;
	User.update({ name, username, email, password },{where: {id}}).then((users) => {
		res.status(200).send({ message: 'Usuário atualizado com sucesso.' });
	})
	.catch((err) => {
		console.log(err.message);
		res.status(500).send({ message: 'Algo deu errado' });
	});
});

router.delete('/:id', (req, res) => {
	User.destroy({where: {id: req.params.id} }).then((users) => {
		res.status(200).send({ message: 'Usuário excluído com sucesso.' });
	})
	.catch((err) => {
		console.log(err.message);
		res.status(500).send({ message: 'Algo deu errado' });
	});
});

module.exports = router;