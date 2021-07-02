const express = require('express');
const router = express.Router();
const rescue = require('express-rescue');

const loginController = require('../controller/loginController');

router.post('/', rescue(loginController.create));

module.exports = router; 