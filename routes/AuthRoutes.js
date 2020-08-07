const express = require('express');
const router = express.Router();

const {SignupController} = require('../controllers')
const {LoginController} = require('../controllers')

const {UserValidator} = require('../validators')

router.post('/login', LoginController.login);
router.post('/signup', UserValidator.create, SignupController.signup);
// router.post('/signup', UserValidator.create, PostController.create);

// const {UserController} = require('../controllers')
// const {PutController} = require('../controllers')
// const {DeleteController} = require('../controllers')

module.exports = router;
