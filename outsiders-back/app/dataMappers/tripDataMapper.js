const client = require('./client');

module.exports = {
    async getAllTrips() {
        const result = await client.query('SELECT * FROM "trip"');
        return result.rows;
    },

    async postNewTrip(tripToCreate) {
        const result = await client.query('INSERT INTO "trip"("title", "description", "date", "time", "from", "to", "places", "minimum", "price", "duration", "sport_id", "user_id") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *', [tripToCreate.title, tripToCreate.description, tripToCreate.date, tripToCreate.time, tripToCreate.from, tripToCreate.to, tripToCreate.places, tripToCreate.minimum, tripToCreate.price, tripToCreate.duration, tripToCreate.sport_id, tripToCreate.user_id]);
        if (result.rowCount == 0) {
            return null
        }
        return result.rows[0];

    },

    async searchTrips(trips) {
        const result = await client.query('SELECT * FROM "trip" JOIN "sport" ON "trip"."sport_id"="sport"."id"  WHERE "trip"."date"=$1 AND "trip"."from"=$2 AND "sport"."title"=$3', [trips.date, trips.from, trips.sport]);
        if (result.rowCount == 0) {
            return null
        }
        return result.rows;
    },

    async getOneTrip(tripId) {
        const result = await client.query('SELECT * FROM "trip" WHERE "trip".id = $1', [tripId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    async updateOneTrip(tripId, tripToUpdate) {

        const result = await client.query('UPDATE "trip" SET "title"=$1, "description"=$2, "date"=$3, "time"=$4, "from"=$5, "to"=$6, "places"=$7, "minimum"=$8, "price"=$9, "duration"=$10, "sport_id"=$11 WHERE "id"=$12 RETURNING *', [tripToUpdate.title, tripToUpdate.description, tripToUpdate.date, tripToUpdate.time, tripToUpdate.from, tripToUpdate.to, tripToUpdate.places, tripToUpdate.minimum, tripToUpdate.price, tripToUpdate.duration, tripToUpdate.sport_id, tripId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async associateUserParticipateTrip(userId, tripId) {
        const result = await client.query('INSERT INTO "m2m_user_particpate_trip"("user_id", "trip_id") VALUES($1, $2) RETURNING *', [userId, tripId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async deleteOneTrip(idTripToDelete) {
        const result = await client.query('DELETE FROM "trip" WHERE id=$1', [idTripToDelete]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async dissociateUserParticipateTrip(userId, tripId) {
        const result = await client.query('DELETE FROM "m2m_user_participate_trip" WHERE "user_id"=$1 AND "trip_id"=$2', [userId, tripId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async allComments(tripId) {
        const result = await client.query('SELECT * FROM "message" WHERE "trip_id"=$1', [tripId]);
        return result.rows;
    },

    async postNewCommentOnThisTrip(commentToCreate) {
        const result = await client.query('INSERT INTO "message"("title", "content", "user_id", "trip_id") VALUES ($1, $2, $3, $4) RETURNING *', [commentToCreate.title, commentToCreate.content, commentToCreate.user_id, commentToCreate.trip_id]);
        if (result.rowCount == 0) {
            return null
        }
        return result.rows[0];
    }
    

};