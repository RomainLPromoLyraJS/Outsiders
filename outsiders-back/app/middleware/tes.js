const jwt = require('jsonwebtoken');

/* const password = 'Miamiam1!';
const regexPassword = /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}/;
const result = regexPassword.test(password);
console.log(result); */

const authorizationn = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI1LCJpYXQiOjE2MTE4MTY4MTAsImV4cCI6MTYxMTg2MDAxMH0.B7K2B66Y17B1pFD52ryna2JEcx_THDCDmGRsdjX_x-I';

function isAuth (authorizationn) {
     
    /* const authorization = req.header['authorization'];
    if(!authorization) {
        next();
    }; */
    const token = authorizationn.split(' ')[1];
    const { userId } = verify(token, process.env.JWTSECRET);
    console.log(userId);
}

