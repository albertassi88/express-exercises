const boomError = require('../middlewares/error');
const rescue = require('express-rescue');
const songModel = require('../models/songModel');
const service = require('../services/songsService');

//Service
const getAll = rescue(async (_req, res) => {
    const songs = await service.getAll();
    res.status(200).json(songs);
});

//Service
const getById = rescue(async (req, res) => {
    const { id } = req.params;
    const song = await service.getById(id);
    if (song.error && song.error.code === 'not_found') {
        throw boomError.notFound(song.error.message);
    }

    if (song.error) next(song.error);    

    res.status(200).json(song);
});

//Service
const create = rescue(async (req, res,next) => {
    const { name, album } = req.body;
    const createdSong = await service.create({ name, album });

    if (createdSong.error && createdSong.error.code === 'already_exists') {
        throw boomError.conflict(createdSong.message);
    }

    if (createdSong.error) {
        return next(createdSong.error);
    }

    res.status(201).json(createSong);
});

const update = rescue(async (req, res) => {
    try {
        const { name, album } = req.body;
        const { id } = req.params;
    
        await songModel.update(id, name, album);
        const result = { id, name, album };
        res.status(201).json(result).end();
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Algo deu errado' });
      }
});

const remove = rescue(async (req, res) => {
    const { id } = req.params;
    await songModel.exclude(id);
    res.status(204).end();
});

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};