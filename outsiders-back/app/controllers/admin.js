const adminDataMapper = require('../dataMappers/adminDataMapper');

module.exports = {
    async connect(req, res, next) {
        try {
            const connect = await adminDataMapper.connect();
            res.json(connect);
        } catch(error) {
            next(error);
        }
    },
    

};