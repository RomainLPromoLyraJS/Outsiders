const jwt = require('jsonwebtoken');

//mon petit MW d'authentification
const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ');
        if (token[0] === 'Bearer' && jwt.verify(token[1], process.env.JWTSECRET)) {
            const verif = jwt.verify(token[1], process.env.JWTSECRET);
            console.log('contenu du token', verif);
            next();
        } else {
            res.sendStatus('403');
            next(error);
        }
    } catch (error) {
            next(error);
        }
    };

module.exports = auth;