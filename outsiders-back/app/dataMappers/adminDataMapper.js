const client = require('./client');

module.exports = {
    async connect(email, password) {
        const result = await client.query('SELECT * FROM "user" JOIN "role" ON "user".role_id = "role".id WHERE "user"."email" = $1 AND "user"."password" = $2 AND "role".id = 2' , [email, password]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },
};