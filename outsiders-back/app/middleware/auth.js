const jwt = require('express-jwt');

const authorizationMiddleware = jwt({
    secret: process.env.JWTSECRET,
    algorithms: ['HS256']
});

module.exports = authorizationMiddleware;