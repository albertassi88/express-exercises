const userService = require('../services/userServices');

const getAll = async(req, res) => {
    const result = await userService.getAll();
    res.status(200).json(result);
}

const create = async(req, res) => {
    const result = await userService.create(req.body);
    res.status(200).json({ token: result });
}

module.exports = {
    getAll,
    create,
};