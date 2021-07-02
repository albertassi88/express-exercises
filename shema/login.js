const joi = require('joi');

module.exports = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required()
    .min(6)
    .message('{#label} length must be 6 characters long'), //personalizar a mensagem
});