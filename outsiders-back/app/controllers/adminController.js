const adminDataMapper = require('../dataMappers/adminDataMapper');

module.exports = {
    async connect(req, res, next) {
        try {
            const mail = req.body.mail;
            const password = req.body.password;
            const admin = await adminDataMapper.connect(mail, password);
            if (!admin) {
                res.locals.notFound = "identification invalide";
                next();
                return;
            }
            req.session.adminID = admin.id;
            res.json({
                message: 'administrateur connecté',
                data: admin });
        } catch(error) {
            next(error);
        }
    },
    

};