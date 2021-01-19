const client = require('./client');

module.exports = {
    async connect(mail, password) {
        const result = await client.query(`SELECT * FROM user WHERE mail = $1 AND PASSWORD = $2`, [mail, password]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },
};