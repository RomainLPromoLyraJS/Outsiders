const client = require('./client');

module.exports = {
    async connect(email) {
        const result = await client.query('SELECT u.id, u.lastname, u.firstname, u.email, u.password, u.username, u.description, r.id AS role_id, r.name FROM "user" AS u JOIN "role" AS r ON u.role_id=r.id WHERE u.email = $1 AND r.role_id = 2', [email]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },
};