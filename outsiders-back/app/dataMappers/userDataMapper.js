
const client = require('./client');

module.exports = {
    async allUsers() {
        const result = await client.query('SELECT * FROM "user" JOIN "role" ON "user".role_id = "role".id');
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
        const result = await client.query('SELECT * FROM "user" JOIN "role" ON "user".role_id = "role".id WHERE "user".id = $1', [userId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    async updateUser(userId, userToUpdate) {

        const result = await client.query('UPDATE "user" SET lastname=$1, firstname=$2, email=$3, password=$4, username=$5, description=$6 WHERE id=$7 RETURNING *', [userToUpdate.lastname, userToUpdate.firstname, userToUpdate.email, userToUpdate.password, userToUpdate.username, userToUpdate.description, userId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async deleteUser(deleteUserId) {
        const result = await client.query('');
        return result;
    },

    async allReviews(userId) {
        const result = await client.query('SELECT * FROM "reviews" JOIN "user" ON "reviews"."evaluated_id"="user"."id" JOIN "role" ON "user"."role_id"="role"."id" WHERE "reviews"."evaluated_id"=$1', [userId]);
        return result.rows;
    },

    async createReview(reviewToPublish) {
        const result = await client.query('INSERT INTO "reviews"(score, title, content, publisher_id, evaluated_id) VALUES ($1, $2, $3, $4, $5) RETURNING *', [reviewToPublish.score, reviewToPublish.title, reviewToPublish.content, reviewToPublish.publisher_id, reviewToPublish.evaluated_id]);
        return result.rows[0];
    },
};