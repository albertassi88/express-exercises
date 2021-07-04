const userService = require('../services/userService');

const getAll = async(req, res) => {
    const result = await userService.getAll();
    res.status(200).json(result);
};

module.exports = {
    getAll,
};