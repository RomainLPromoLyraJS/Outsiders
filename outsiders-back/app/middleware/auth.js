const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ');
        console.log(token);
        if (token[0] === 'Bearer' && jwt.verify(token[1], process.env.JWTSECRET)) {
            const verif = jwt.verify(token[1], process.env.JWTSECRET);
            console.log('verif', verif);
            console.log(verif.userId);
            next();
        } else {
            res.sendStatus('403');
            next();
        }
    } catch (error) {
            next(error);
        }
    };

module.exports = auth;