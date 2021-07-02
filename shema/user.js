const joi = require('joi');

module.exports = joi.object({
  name: joi.string().min(8).required(),
  email: joi.string().email().required(),
  password: joi.string().required()
    .min(6)
    .message('o comprimento deve ser de 6 caracteres'), //personalizar a mensagem
});