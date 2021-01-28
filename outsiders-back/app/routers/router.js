const express = require('express');

const jwt = require('jsonwebtoken');

const authMiddleware = require('../middleware/auth');

const adminController = require('../controllers/adminController');
const loginController = require('../controllers/loginController');
const userController = require('../controllers/userController');
const errorController = require('../controllers/errorController');
const categoryController = require('../controllers/categoryController');
const sportController = require('../controllers/sportController');
const tripController =require('../controllers/tripController');



const router = express.Router();

router.post('/admin', adminController.connect);

//routes accessibles sans être connecté
router.post('/login', loginController.login);
router.post('/user', userController.createNewUser);
router.get('/category', categoryController.getAllCategories);
router.get('/sport', sportController.getAllSports);
router.get('/trip', tripController.getAllTrips);
router.post('/searchTrips', tripController.searchTrips);

//routes protégées par authorizationMiddleware
router.get('/user', authMiddleware, userController.allUsers);
router.get('/user/:id(\\d+)', authMiddleware, userController.oneUser);
router.patch('/user/:id(\\d+)', authMiddleware, userController.updateUser);
router.delete('/user/:id(\\d+)', authMiddleware, userController.deleteUser);
router.get('/user/:id(\\d+)/reviews', authMiddleware, userController.allReviews);
router.post('/user/:id(\\d+)/reviews', authMiddleware, userController.createReview);

router.get('/category/:id(\\d+)', authMiddleware, categoryController.getOneCategory);

router.get('/sport/:id(\\d+)', authMiddleware, sportController.getOneSport);

router.post('/trip', authMiddleware, tripController.postNewTrip);
router.get('/trip/:id(\\d+)', authMiddleware, tripController.getOneTrip);
router.patch('/trip/:id(\\d+)', authMiddleware, tripController.updateOneTrip);
router.delete('/trip/:id(\\d+)', authMiddleware, tripController.deleteOneTrip);

router.get('/trip/:id(\\d+)/comment', authMiddleware, tripController.getAllCommentsOnThisTrip);
router.post('/trip/:id(\\d+)/comment', authMiddleware, tripController.postNewCommentOnThisTrip);

router.patch('/trip/:tripId(\\d+)/user/:userId(\\d+)', authMiddleware, tripController.associateUserParticipateTrip);
router.delete('/trip/:tripId(\\d+)/user/:userId(\\d+)', authMiddleware, tripController.dissociateUserParticipateTrip);

//routes à accès admin
router.post('/category', authMiddleware, categoryController.postNewCategory);
router.patch('/category/:id(\\d+)', authMiddleware, categoryController.updateOneCategory);
router.delete('/category/:id(\\d+)', authMiddleware, categoryController.deleteOneCategory);
router.post('/sport', authMiddleware, sportController.postNewSport);
router.patch('/sport/:id(\\d+)', authMiddleware, sportController.updateOneSport);
router.delete('/sport/:id(\\d+)', authMiddleware, sportController.deleteOneSport);

router.use(errorController.error404);
router.use(errorController.error500);

module.exports = router;

