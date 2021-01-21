const loginDataMapper = require('../dataMappers/loginDataMapper');

module.exports = {
    async login(req, res, next) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const login = await loginDataMapper.login(email, password);
            if (!login) {
                res.locals.notFound = "identification invalide";
                next();
                return;
            }
            
            res.json({
                message: 'utilisateur connecté',
                data: login });
        } catch(error) {
            next(error);
        }
    },
    

};

