const { Product } = require('../src/models');

const getAll = async() => {
    try {
        return await Product.findAll();        
    } catch (e) {
        console.log(e.message);
    }
};

module.exports = {
    getAll,
};