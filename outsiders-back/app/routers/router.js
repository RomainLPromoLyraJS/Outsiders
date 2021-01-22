const express = require('express');

const adminController = require('../controllers/adminController');
const loginController = require('../controllers/loginController');
const userController = require('../controllers/userController');
const errorController = require('../controllers/errorController');
const categoryController = require('../controllers/categoryController');
const sportController = require('../controllers/sportController');
const tripController =require('../controllers/tripController');

const router = express.Router();

router.post('/admin', adminController.connect);

router.post('/login', loginController.login);

router.get('/user', userController.allUsers);
router.post('/user', userController.createNewUser);
router.get('/user/:id(\\d+)', userController.oneUser);
router.patch('/user/:id(\\d+)', userController.updateUser);
router.delete('/user/:id(\\d+)', userController.deleteUser);
router.get('/user/:id(\\d+)/reviews', userController.allReviews);
router.post('/user/:id(\\d+)/reviews', userController.createReview);

router.get('/category', categoryController.getAllCategories);
router.post('/category', categoryController.postNewCategory);
router.get('/category/:id(\\d+)', categoryController.getOneCategory);
router.patch('/category/:id(\\d+)', categoryController.updateOneCategory);
router.delete('/category/:id(\\d+)', categoryController.deleteOneCategory);

router.get('/sport', sportController.getAllSports);
router.post('/sport', sportController.postNewSport);
router.get('/sport/:id(\\d+)', sportController.getOneSport);
router.patch('/sport/:id(\\d+)', sportController.updateOneSport);
router.delete('/sport/:id(\\d+)', sportController.deleteOneSport);

router.get('/trip', tripController.getAllTrips);
router.post('/trip', tripController.postNewTrip);
router.get('/trip/:id(\\d+)', tripController.getOneTrip);
router.patch('/trip/:id(\\d+)', tripController.updateOneTrip);
router.delete('/trip/:id(\\d+)', tripController.deleteOneTrip);
router.post('/searchTrips', tripController.searchTrips);

router.get('/trip/:id(\\d+)/comment', tripController.getAllCommentsOnThisTrip);
router.post('/trip/:id(\\d+)/comment', tripController.postNewCommentOnThisTrip);

//router.patch('/trip/:tripId(\\d+)/user/:userId(\\d+)', tripController.associateUserParticipateTrip);
//router.delete('/trip/:tripId(\\d+)/user/:userId(\\d+)', tripController.dissociateUserParticipateTrip);

router.use(errorController.error404);
router.use(errorController.error500);

module.exports = router;