const userDataMapper = require('../dataMappers/userDataMapper');

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
            const createdUser = await userDataMapper.createNewUser(newUser);
            res.json({
                message: 'new user created',
                data: createdUser
            });
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
            const userId = req.params.id;
            const userToUpdate = req.body;

            const userUpdated = await userDataMapper.updateUser(userId, userToUpdate);
            res.json({
                message: 'user updated',
                data: userUpdated
            });
        } catch(error) {
            next(error);
        }
    },

    async deleteUser(req, res, next) {
        try {
            const deleteUserId = req.params.id;
            await userDataMapper.deleteUser(deleteUserId);
            res.json({
                message: 'user deleted'
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