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
            await userDataMapper.deleteUser();
            res.json({
                status: 'user deleted'
            });
        } catch(error) {
            next(error);
        }
    },

};