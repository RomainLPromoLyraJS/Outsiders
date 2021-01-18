const client = require('./client');

module.exports = {
    async connect() {
        const result = await client.query('');
        return result.rows;
    }
};