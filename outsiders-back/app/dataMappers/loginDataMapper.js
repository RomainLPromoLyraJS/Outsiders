const client = require('./client');

module.exports = {
    async login() {
        const result = await client.query('');
        return result.rows;
    }
};