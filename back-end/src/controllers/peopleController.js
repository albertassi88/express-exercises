const { Router } = require('express');
const peopleModel = require('../models/peopleModel');

const router = Router();

router.get('/', async (_req, res) => {
    const people = await peopleModel.getAll();
    res.status(200).json(people);
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const people = await peopleModel.getById(id);
        res.status(200).json(people);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Algo deu errado' });
    }
});

router.post('/', async (req, res) => {
    try {
        const newPeople = await peopleModel.create(req.body);
        res.status(201).json(newPeople);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Algo deu errado' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, age } = req.body;
        const updatePeople = await peopleModel.update(id, name, age);
        res.status(201).json(updatePeople);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Algo deu errado' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await peopleModel.exclude(id);
        res.status(204).end();
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Algo deu errado' });
    }
});

module.exports = router;