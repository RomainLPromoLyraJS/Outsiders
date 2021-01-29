const tripDataMapper = require('../dataMappers/tripDataMapper');
const jwt = require('jsonwebtoken');

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
            const tripId = tripCreated.id;
            const userId = tripCreated.user_id;
            const m2m = await tripDataMapper.postNewTrip2(tripId, userId);
            res.json({
                message: 'new trip created',
                data: tripCreated,
                association: m2m
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
            //demander l'id du créateur du trip à modifier 
            const creator = await tripDataMapper.getCreatorTrip(tripId);
            const creatorId = creator.user_id;

            //avant d'updater un trip, vérif du role du user :
            //si c'est un administrateur, il peut modifier n'importe quel trip
            //si ce n'est pas un administrateur, il ne peut modifier qu'un trip qu'il a créé
            const token = req.headers.authorization.split(' ');
            const tokenDecoded = jwt.verify(token[1], process.env.JWTSECRET);
            const tokenRoleId = tokenDecoded.roleId;
            const tokenUserId = tokenDecoded.userId;

            if (tokenRoleId === 2 || (tokenRoleId === 1 && tokenUserId == creatorId)) {
                const tripToUpdate = req.body;
                const tripUpdated = await tripDataMapper.updateOneTrip(tripId, tripToUpdate);
                res.json({
                    message: 'sortie mise à jour',
                    data: tripUpdated
                });
            } else {
                res.status('403').json({message : 'Accès interdit : tu n\'es pas l\'organisateur de la sortie'});
                next(error);
            };
        } catch(error) {
            next(error);
        }
    },

    async associateUserParticipateTrip(req, res, next) {
        try {
            let userId = null;
            const tripId = req.params.tripId;

            //avant d'updater un user, vérif du role du user :
            //si c'est un administrateur, il peut modifier n'importe quel user
            //si ce n'est pas un administrateur, il ne peut modifier que son profil
            const token = req.headers.authorization.split(' ');
            const tokenDecoded = jwt.verify(token[1], process.env.JWTSECRET);
            const tokenRoleId = tokenDecoded.roleId;
            const tokenUserId = tokenDecoded.userId;

            if (tokenRoleId === 2 || (tokenRoleId === 1 && tokenUserId == req.params.userId)) {
                userId = req.params.userId;
            } else {
                res.status('403').json({message : 'Accès interdit : il est impossible d\'inscrire un autre membre'});
                next(error);
            };

            const check = await tripDataMapper.checkAssociation(userId, tripId);
            if (check === null) {
                const associated = await tripDataMapper.associateUserParticipateTrip(userId, tripId);
            res.json({
                message: `Inscription à la sortie enregistrée`,
                data: associated
            })
            } else {
                res.json({
                    message: 'Membre déjà inscrit à cette sortie'
                })
            }
        } catch(error) {
            next(error);
        }
    },

    async deleteOneTrip(req, res, next) {
        try {
            const tripId = req.params.id;
            //demander l'id du créateur du trip à modifier 
            const creator = await tripDataMapper.getCreatorTrip(tripId);
            const creatorId = creator.user_id;
            //avant d'updater un trip, vérif du role du user :
            //si c'est un administrateur, il peut modifier n'importe quel trip
            //si ce n'est pas un administrateur, il ne peut modifier qu'un trip qu'il a créé
            const token = req.headers.authorization.split(' ');
            const tokenDecoded = jwt.verify(token[1], process.env.JWTSECRET);
            const tokenRoleId = tokenDecoded.roleId;
            const tokenUserId = tokenDecoded.userId;
            if (tokenRoleId === 2 || (tokenRoleId === 1 && tokenUserId == creatorId)) {
                const tripDeleted = await tripDataMapper.deleteOneTrip(tripId);
                res.json({
                    message: 'sortie supprimée',
                    data: tripDeleted
                })
            } else {
                res.status('403').json({message : 'Suppression interdite : tu n\'es pas l\'organisateur de la sortie'});
                next(error);
            };
        } catch(error) {
            next(error);
        }
    },

    async dissociateUserParticipateTrip(req, res, next) {
        try {
            let userId = null;
            const tripId = req.params.tripId;

            //avant de supprimer un user d'une sortie, vérif du role du user :
            //si c'est un administrateur, il peut desinscrire n'importe quel user d'une sortie
            //si ce n'est pas un administrateur, il ne peut desinscrire que lui-même d'une sortie
            const token = req.headers.authorization.split(' ');
            const tokenDecoded = jwt.verify(token[1], process.env.JWTSECRET);
            const tokenRoleId = tokenDecoded.roleId;
            const tokenUserId = tokenDecoded.userId;

            if (tokenRoleId === 2 || (tokenRoleId === 1 && tokenUserId == req.params.userId)) {
                userId = req.params.userId;
            } else {
                res.status('403').json({message : 'Accès interdit : il est impossible de desinscrire un autre membre'});
                next(error);
            };

            const dissociate = await tripDataMapper.dissociateUserParticipateTrip(userId, tripId); 
            res.json({
                message: "Membre maintenant desinscrits de cette sortie",
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