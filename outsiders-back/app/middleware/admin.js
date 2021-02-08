const jwt = require('jsonwebtoken');

//mon petit MW de d'authentification administrateur
const adminMW = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ');
        const tokenDecoded = jwt.verify(token[1], process.env.JWTSECRET);
        const tokenRoleId = tokenDecoded.roleId;
        if (tokenRoleId === 2) {
            console.log('Accès autorisé : connecté en administrateur');
            return next();
        } else {
            console.log('Accès interdit : il faut être administrateur')
            res.status('403').json({message : 'Accès interdit : il faut être administrateur'});
            next(error);
        }
    } catch (error) {
            next(error);
        }
};

module.exports = adminMW;