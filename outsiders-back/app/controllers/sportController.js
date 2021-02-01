const sportDataMapper = require('../dataMappers/sportDataMapper');


module.exports = {
    async getAllSports(req, res, next) {
        try {
            const allSports = await sportDataMapper.getAllSports();
            res.json({
                data: allSports
            });
        } catch(error) {
            next(error);
        }
    },

    async postNewSport(req, res, next) {
        try {
            const sportToCreate = req.body;
            const sportCreated = await sportDataMapper.postNewSport(sportToCreate);
            res.json({
                message: 'new sport created',
                data: sportCreated
            });
        } catch(error) {
            next(error);
        }
    },

    async getOneSport(req, res, next) {
        try {
            const sportId = req.params.id;
            const oneSport = await sportDataMapper.getOneSport(sportId);
            res.json({
                data: oneSport
            });
        } catch(error) {
            next(error);
        }
    },

    async updateOneSport(req, res, next) {
        try {
            const sportId = req.params.id;
            const sportToUpdate = req.body;

            const sportUpdated = await sportDataMapper.updateOneSport(sportId, sportToUpdate);
            res.json({
                message: 'sport updated',
                data: sportUpdated
            });
        } catch(error) {
            next(error);
        }
    },

    async deleteOneSport(req, res, next) {
        try {
            const idSportToDelete = req.params.id;
            const sportDeleted = await sportDataMapper.deleteOneSport(idSportToDelete);
            res.json({
                message: 'sport deleted',
                data: sportDeleted
            });
        } catch(error) {
            next(error);
        }
    },


};