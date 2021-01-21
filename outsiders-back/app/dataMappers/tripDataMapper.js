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

    async getOneTrip(tripId) {
        const result = await client.query('SELECT * FROM "trip" WHERE "trip".id = $1', [tripId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    async updateOneTrip(tripToUpdate) {

        const result = await client.query('');
        return result;
    },

    async deleteOneTrip(idTripToDelete) {
        const result = await client.query('');
        return result;
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