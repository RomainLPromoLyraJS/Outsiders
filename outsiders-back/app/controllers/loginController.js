const loginDataMapper = require('../dataMappers/loginDataMapper');

module.exports = {
    async login(req, res, next) {
        try {
            const mail = req.body.mail;
            const password = req.body.password;
            const login = await loginDataMapper.login(mail, password);
            if (!login) {
                res.locals.notFound = "identification invalide";
                next();
                return;
            }
            req.session.loginID = login.id;
            res.json({
                message: 'utilisateur connecté',
                data: login });
        } catch(error) {
            next(error);
        }
    },
    

};

