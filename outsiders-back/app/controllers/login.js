const loginDataMapper = require('../dataMappers/loginDataMapper');

module.exports = {
    async login(req, res, next) {
        try {
            const login = await loginDataMapper.login();
            res.json(login);
        } catch(error) {
            next(error);
        }
    },
    

};