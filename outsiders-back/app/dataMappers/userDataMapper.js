
const client = require('./client');

module.exports = {
    async allUsers() {
        const result = await client.query('select * from "user" JOIN trip ON "user".id = trip.user_id JOIN message ON "user".id = message.user_id JOIN "role" ON "user".role_id = "role".id');
        return result.rows;
    },

    async createNewUser(newUser) {
        const result = await client.query('INSERT INTO "user"(lastname, firstname, email, password, username, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [newUser.lastname, newUser.firstname, newUser.email, newUser.password, newUser.username, newUser.description]);
        if (result.rowCount == 0) {
            return null
        }
        return result.rows[0];

    },

    async oneUser(userId) {
        const result = await client.query('select * from "user" JOIN trip ON "user".id = trip.user_id JOIN message ON "user".id = message.user_id JOIN "role" ON "user".role_id = "role".id WHERE "user".id = $1', [userId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    async updateUser(userToUpdate) {

        const result = await client.query('');
        return result;
    },

    async deleteUser(deleteUserId) {
        const result = await client.query('');
        return result;
    },

    async allReviews(userId) {
        const result = await client.query('SELECT * FROM "message" JOIN "trip" ON "message"."trip_id"="trip"."id" JOIN "user" ON "trip"."user_id"="user"."id" JOIN "sport" ON "sport"."id"="trip"."sport_id" JOIN "category" ON "sport"."category_id"="category"."id" WHERE "trip"."user_id"=$1', [userId]);
        return result.rows;
    },

    async createReview(userId) {
        const result = await client.query('');
        return result;
    },
};