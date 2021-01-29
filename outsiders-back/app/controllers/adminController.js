const adminDataMapper = require('../dataMappers/adminDataMapper');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const tripDataMapper = require('../dataMappers/tripDataMapper');



module.exports = {
    async connect(req, res, next) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const admin = await adminDataMapper.connect(email);
            console.log(admin);
            const isPasswordValid = bcrypt.compareSync(password, admin.password);
            if (!isPasswordValid) {
                res.locals.notFound = "identification invalide";
                next();
                return;
            }
            if (isPasswordValid) {
                const userId = admin.id;
                const tripRegistered = await tripDataMapper.tripRegistered(userId);
                const jwtContent = {userId: admin.id, roleId: admin.role_id};
                const jwtOptions = {
                    algorithm: 'HS256',
                    expiresIn: '24h'
                };
                res.json({
                message: 'administrateur connecté',
                data: admin, tripRegistered,
                logged: true,
                username: admin.username,
                token: jwt.sign(jwtContent, process.env.JWTSECRET, jwtOptions)     
                });
            }
            
        } catch(error) {
            next(error);
        }
    },
    

};