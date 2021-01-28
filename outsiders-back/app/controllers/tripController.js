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

    async searchTrips(req, res, next) {
        try {
            const trips = req.body;
            const searchTrips = await tripDataMapper.searchTrips(trips);
            
            res.json({
                message: 'list of trips',
                data: searchTrips
            });
        } catch(error) {
            next(error);
        }
    },

    async getOneTrip(req, res, next) {
        try {
            const tripId = req.params.id;
            const oneTrip1 = await tripDataMapper.getOneTrip1(tripId);
            const oneTrip2 = await tripDataMapper.getOneTrip2(tripId);
            const oneTrip3 = await tripDataMapper.getOneTrip3(tripId);
            const oneTrip = (oneTrip1.concat(oneTrip2)).concat(oneTrip3);

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

    async associateUserParticipateTrip(req, res, next) {
        try {
            const userId = req.params.userId;
            const tripId = req.params.tripId;

            const associated = tripDataMapper.associateUserParticipateTrip(userId, tripId);
            res.json({
                message: 'user and trip associated in participate',
                data: associated
            })
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

    async dissociateUserParticipateTrip(req, res, next) {
        try {
            const userId = req.params.id;
            const tripId = req.params.id;
            const dissociate = await tripDataMapper.dissociateUserParticipateTrip(userId, tripId); 
            res.json({
                message: "trip and user dissociated from participate",
                data: dissociate
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