const client = require('./client');

module.exports = {
    async login(email) {
        const result = await client.query('SELECT * FROM "user" JOIN "role" ON "user".role_id = "role".id WHERE "user"."email" = $1', [email]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    }
};
