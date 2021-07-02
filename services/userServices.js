const { User } = require('../src/models');
const createJWT = require('../middleaware/createJWT');
const validateSchema = require('../shema/user');

const getAll = async () => {
    try {
        return await User.findAll();        
    } catch (e) {
        console.log(e.message);
    }
}

const create = async (user) => {
    const { error } = validateSchema.validate(user); //validando com o joi
    if (error) return error.details[0].message;

    try {        
        const response = await User.create(user);
        const token = createJWT(response);  //criando o token
        return token;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAll,
    create,
}