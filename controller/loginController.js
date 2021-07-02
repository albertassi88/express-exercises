const loginService = require('../services/loginServices');

const create = async(req, res) => {
    const { email, password } = req.body;    
    const result = await loginService.create({ email, password });
    res.status(200).json({ token: result });
}

module.exports = {
    create,
};