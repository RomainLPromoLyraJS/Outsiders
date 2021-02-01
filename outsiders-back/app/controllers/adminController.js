const adminDataMapper = require('../dataMappers/adminDataMapper');

module.exports = {
    async connect(req, res, next) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const admin = await adminDataMapper.connect(email, password);
            if (!admin) {
                res.locals.notFound = "identification invalide";
                next();
                return;
            }
            
            res.json({
                message: 'administrateur connecté',
                data: admin });
        } catch(error) {
            next(error);
        }
    },
    

};