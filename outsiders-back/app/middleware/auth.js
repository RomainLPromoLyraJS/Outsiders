const jwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');

const authorizationMiddleware = jwt({
    secret: process.env.JWTSECRET,
    algorithms: ['HS256']
});
/* 
function isAuth (req) {
     
    const authorization = req.headers['authorization'];
    if(!authorization) {
        next();
    };
    const token = authorization.split(' ')[1];
    const { userId } = verify(token, process.env.JWTSECRET);
    return userId;
};
 */

module.exports = (authorizationMiddleware);