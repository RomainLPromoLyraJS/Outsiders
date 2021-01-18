const express = require('express');


const adminController = require('../controllers/admin');
const loginController = require('../controllers/login');
const userController = require('../controllers/user');
const errorController = require('../controllers/error');

const router = express.Router();

router.post('/admin', adminController.connect);

router.post('/login', loginController.login);

router.get('/user', userController.allUsers);
router.post('/user', userController.createNewUser);
router.get('/user/:id(\\d+)', userController.oneUser);
router.patch('/user/:id(\\d+)', userController.updateUser);

router.use(errorController.error404);
router.use(errorController.error500);

module.exports = router;