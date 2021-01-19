
const client = require('./client');

module.exports = {
    async allUsers() {
        const result = await client.query('SELECT * FROM user ORDER BY id DESC');
        return result.rows;
    },

    async createNewUser(newUser) {
        const result = await client.query('INSERT INTO user(lastname, firstname, mail, password, pseudo, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [newUser.lastname, newUser.firstname, newUser.mail, newUser.password, newUser.pseudo, newUser.description]);
        if (result.rowCount == 0) {
            return null
        }
        return result.rows[0];

    },

    async oneUser(userId) {
        const result = await client.query('SELECT * FROM user WHERE id = $1', [userId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    async updateUser(updateUser) {
        const result = await client.query('');
        return result;
    },

    async deleteUser(deleteUser) {
        const result = await client.query('');
        return result;
    },

    async allReviews() {
        const result = await client.query('');
        return result;
    },

    async createReview() {
        const result = await client.query('');
        return result;
    },
};