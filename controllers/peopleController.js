const { Router } = require('express');
const service = require('../services/peopleService');

const router = Router();

// Rotas que têm parâmetros devem vir depois de rotas que não têm parâmetros, isso evita conflito entre as rotas.

// GET /people/
router.get('/', async (_req, res) => {
    const people = await service.getAll();
    res.status(200).json(people);
});

// GET /people/:id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;    
        const people = await service.getById(id);
        res.status(200).json(people);        
    } catch (err) {
        if (err.code === 'not_found') {
            return res.status(404).json(err);
        }
        console.error(err);
        res.status(500).json({ message: 'Algo deu errado' });        
    }
});

// POST /people/
router.post('/', async (req, res) => {
    try {
        const { name, age } = req.body;
        const newPeople = await service.create({ name, age });
        res.status(201).json(newPeople);        
    } catch (err) {
        if (err.code === 'underage_person') {
            return res.status(403).json(err);
        }
        console.error(err);
        res.status(500).json({ message: 'Algo deu errado' });  
    }
});

// PUT /people/:id
router.put('/:id', async (req, res) => { 
    try {
        const { id } = req.params;
        const { name, age } = req.body;
        const updatePeople = await service.update(id, name, age);
        res.status(201).json(updatePeople);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Algo deu errado' });
    }
});

// DELETE /people/:id
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await service.exclude(id);
        res.status(204).end();        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Algo deu errado' });
    }
});

module.exports = router;

