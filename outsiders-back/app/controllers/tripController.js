const tripDataMapper = require('../dataMappers/tripDataMapper');

module.exports = {
    async getAllTrips(req, res, next) {
        try {
            const allTrips = await tripDataMapper.getAllTrips();
            res.json({
                data: allTrips
            });
        } catch(error) {
            next(error);
        }
    },

    async postNewTrip(req, res, next) {
        try {
            const tripToCreate = req.body;
            const tripCreated = await tripDataMapper.postNewTrip(tripToCreate);
            res.json({
                message: 'new trip created',
                data: tripCreated
            });
        } catch(error) {
            next(error);
        }
    },

    async getOneTrip(req, res, next) {
        try {
            const tripId = req.params.id;
            const oneTrip = await tripDataMapper.getOneTrip(tripId);
            res.json({
                data: oneTrip
            });
        } catch(error) {
            next(error);
        }
    },

    async updateOneTrip(req, res, next) {
        try {
            const tripId = req.params.id;
            const tripToUpdate = req.body;

            const tripUpdated = await tripDataMapper.updateOneTrip(tripId, tripToUpdate);
            res.json({
                message: 'trip updated',
                data: tripUpdated
            });
        } catch(error) {
            next(error);
        }
    },

    async deleteOneTrip(req, res, next) {
        try {
            const idTripToDelete = req.params.id;
            const tripDeleted = await tripDataMapper.deleteOneTrip(idTripToDelete);
            res.json({
                message: 'trip deleted',
                data: tripDeleted
            });
        } catch(error) {
            next(error);
        }
    },

    async getAllCommentsOnThisTrip(req, res, next) {
        try {
            const tripId = req.params.id;
            const allComments = await tripDataMapper.allComments(tripId);
            res.json({
                data: allComments
            });
        } catch(error) {
            next(error);
        }
    },

    async postNewCommentOnThisTrip(req, res, next) {
        try {
            const commentToCreate = req.body;
            const commentCreated = await tripDataMapper.postNewCommentOnThisTrip(commentToCreate);
            res.json({
                message: 'new comment on this trip posted',
                data: commentCreated
            });
        } catch(error) {
            next(error);
        }
    }
       

};