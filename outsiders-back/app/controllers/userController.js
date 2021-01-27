const userDataMapper = require('../dataMappers/userDataMapper');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');


module.exports = {
    async allUsers(req, res, next) {
        try {
            const allUsers = await userDataMapper.allUsers();
            res.json({
                data: allUsers
            });
        } catch(error) {
            next(error);
        }
    },

    async createNewUser(req, res, next) {
        try {
            const newUser = req.body;
            const saltRounds = 10;
            const regexPassword = /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}/;
            const test = regexPassword.test(newUser.password);

            if (test) {
                const hashedPassword = bcrypt.hashSync(newUser.password, saltRounds);
                            
                const createdUser = await userDataMapper.createNewUser({
                    lastname: newUser.lastname,
                    firstname: newUser.firstname,
                    email: newUser.email,
                    password: hashedPassword,
                    username: newUser.username,
                    description: newUser.description});
                
                res.json({
                    message: 'new user created',
                    data: createdUser
                });

            } else {
                res.json({
                    message: 'le mot de passe doit contenir au moins 8 caractères dont 1 majuscule, 1 minuscule, 1chiffre, 1 caractère spécial',
                    data: newUser.email
                });
            }
            
        } catch(error) {
            next(error);
        }
    },
    
    async oneUser(req, res, next) {
        try {
            const userId = req.params.id;
            const oneUser = await userDataMapper.oneUser(userId);
            res.json({
                data: oneUser
            });
        } catch(error) {
            next(error);
        }
    },

    async updateUser(req, res, next) {
        try {
            const saltRounds = 10;
            const userId = req.params.id;
            const userToUpdate = req.body;

            const regexPassword = /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}/;
            const test = regexPassword.test(userToUpdate.password);
            console.log(test);
            if (test) {
                const hashedPassword = bcrypt.hashSync(userToUpdate.password, saltRounds);
                const userUpdated = await userDataMapper.updateUser(userId, {
                    lastname: userToUpdate.lastname,
                    firstname: userToUpdate.firstname,
                    email: userToUpdate.email,
                    password: hashedPassword,
                    username: userToUpdate.username,
                    description: userToUpdate.description});
                

                res.json({
                    message: 'user updated',
                    data: userUpdated
                });
            } else {
                res.json({
                    message: 'le mot de passe doit contenir au moins 8 caractères dont 1 majuscule, 1 minuscule, 1chiffre, 1 caractère spécial',
                    data: newUser.email
                });
            }
        } catch(error) {
            next(error);
        }
    },

    async deleteUser(req, res, next) {
        try {
            const deleteUserId = req.params.id;
            const userDeleted = await userDataMapper.deleteUser(deleteUserId);
            res.json({
                message: 'user deleted',
                data: userDeleted
            });
        } catch(error) {
            next(error);
        }
    },

    async allReviews(req, res, next) {
        try {
            const userId = req.params.id;
            const allReviews = await userDataMapper.allReviews(userId);
            res.json({
                data: allReviews
            });
        } catch(error) {
            next(error);
        }
    },

    async createReview(req, res, next) {
        try {
            const reviewToPublish = req.body;
            const newReview = await userDataMapper.createReview(reviewToPublish);
            res.json({
                message: 'nouvel avis posté',
                data: newReview
            });
        } catch(error) {
            next(error);
        }
    },

};