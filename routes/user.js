const express = require('express');
const router = express.Router();
const rescue = require('express-rescue');

const userController = require('../controller/userController');
const verifyJWT = require('../middleaware/verifyJWT');  //verificando o token

router.get('/', verifyJWT, rescue(userController.getAll));
router.post('/', verifyJWT, rescue(userController.create));


module.exports = router;