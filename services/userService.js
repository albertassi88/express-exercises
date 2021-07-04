const { User } = require('../src/models');

const getAll = async() => {
    try {
        return await User.findAll();        
    } catch (e) {
        console.log(e.message);
    }
};

module.exports = {
    getAll,
};