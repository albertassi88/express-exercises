const { User, Product } = require('../src/models');

const getAll = async() => {
    try {
        return await User.findAll({
            // include: { model: User, as: 'user', attributes: {exclude: ['password']} }, //inclui na pesquisa o relacionamento com os dados do user e exclui na pesquisa o campo password  
            include: { model: Product, as: 'products' }, //inclui na pesquisa o relacionamento com os dados do user  
            attributes: { exclude: [ 'userId' ] }  //exclui na pesquisa o campo userId
        });        
    } catch (e) {
        console.log(e.message);
    }
};

module.exports = {
    getAll,
};