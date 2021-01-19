const express = require('express');


const adminController = require('../controllers/adminController');
const loginController = require('../controllers/loginController');
const userController = require('../controllers/userController');
const errorController = require('../controllers/errorController');

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