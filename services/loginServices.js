const { Login } = require('../src/models');
const createJWT = require('../middleaware/createJWT');
const validateSchema = require('../shema/login');

const create = async (login) => {
    const { error } = validateSchema.validate(login); //validando com o joi
    if (error) return error.details[0].message;
   
    const response = await Login.create(login);
    const token = createJWT(response);  //criando o token
    return token; 
}

module.exports = {
    create,
}