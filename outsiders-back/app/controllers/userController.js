const userDataMapper = require('../dataMappers/userDataMapper');

module.exports = {
    async allUsers(req, res, next) {
        try {
            const allUsers = await userDataMapper.allUsers();
            res.json(allUsers);
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
            const userId = req.params;
            const oneUser = await userDataMapper.oneUser(userId);
            res.json(oneUser);
        } catch(error) {
            next(error);
        }
    },

    async updateUser(req, res, next) {
        try {
            const updateUser = req.params;
            await userDataMapper.updateUser(updateUser);
            res.json({
                status: 'user updated'
            });
        } catch(error) {
            next(error);
        }
    },

    async deleteUser(req, res, next) {
        try {
            const deleteUser = req.params.id
            await userDataMapper.deleteUser(deleteUser);
            res.json({
                message: 'user deleted'
            });
        } catch(error) {
            next(error);
        }
    },

    async allReviews(req, res, next) {
        try {
            const allReviews = await userDataMapper.allReviews();
            res.json(allReviews);
        } catch(error) {
            next(error);
        }
    },

    async createReview(req, res, next) {
        try {
            const newReview = await userDataMapper.createReview();
            res.json(newReview);
        } catch(error) {
            next(error);
        }
    },

};