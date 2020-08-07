const express = require('express');

const router = express.Router();



const {UserController} = require('../controllers')

const {PostController} = require('../controllers')
const {SignupController} = require('../controllers')
const {PutController} = require('../controllers')
const {DeleteController} = require('../controllers')
const {UserValidator} = require('../validators')





router.get("/users", UserController.findAll);
router.get('/users/:id', UserController.findOne);
router.post("/users", UserValidator.create, PostController.create);
router.post("/users", UserValidator.create, SignupController.signup);
router.patch("/users/:id", UserValidator.patch, PutController.patch);
router.delete("/users/:id", DeleteController.delete);

    

module.exports = router;
