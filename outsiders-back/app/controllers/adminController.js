const adminDataMapper = require('../dataMappers/adminDataMapper');
const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');


module.exports = {
    async connect(req, res, next) {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const authorizationMiddleware = jwt({ secret: process.env.JWTSECRET, algorithms: ['HS256'] });
            const admin = await adminDataMapper.connect(email);
            const isPasswordValid = bcrypt.compareSync(password, admin.password);
            if (!isPasswordValid) {
                res.locals.notFound = "identification invalide";
                next();
                return;
            }
            if (isPasswordValid) {
                const jwtContent = {userId: admin.id};
                const jwtOptions = {
                    algorithm: 'HS256',
                    expiresIn: '24h'
                };
                res.json({
                message: 'administrateur connecté',
                data: admin,
                logged: true,
                username: admin.username,
                token: jsonwebtoken.sign(jwtContent, process.env.JWTSECRET, jwtOptions)     
                });
            }
            
        } catch(error) {
            next(error);
        }
    },
    

};