const client = require('./client');

module.exports = {
    async login(user) {
        const result = await client.query(`SELECT * FROM user WHERE mail = $1 AND PASSWORD = $2`, [user.mail, user.password]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    }
};
