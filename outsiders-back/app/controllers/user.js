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
            await userDataMapper.createNewUser(newUser);
            res.json({
                status: 'new user created'
            });
        } catch(error) {
            next(error);
        }
    },
    
    async oneUser(req, res, next) {
        try {
            const oneUser = await userDataMapper.oneUser();
            res.json(oneUser);
        } catch(error) {
            next(error);
        }
    },

    async updateUser(req, res, next) {
        try {
            const updateUser = await userDataMapper.updateUser();
            res.json(updateUser);
        } catch(error) {
            next(error);
        }
    },

};