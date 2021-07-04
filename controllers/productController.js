const productService = require('../services/productService');

const getAll = async(req, res) => {
    const result = await productService.getAll();
    res.status(200).json(result);
};

module.exports = {
    getAll,
};