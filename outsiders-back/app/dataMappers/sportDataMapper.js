
const client = require('./client');

module.exports = {
    async getAllSports() {
        const result = await client.query('SELECT * FROM "sport"');
        return result.rows;
    },

    async postNewSport(sportToCreate) {
        const result = await client.query('INSERT INTO "sport"(title, description) VALUES ($1, $2) RETURNING *', [sportToCreate.title, sportToCreate.description]);
        if (result.rowCount == 0) {
            return null
        }
        return result.rows[0];

    },

    async getOneSport(sportId) {
        const result = await client.query('SELECT * FROM "sport" WHERE "sport".id = $1', [sportId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    async updateOneSport(sportToUpdate) {

        const result = await client.query('');
        return result;
    },

    async deleteOneSport(idSportToDelete) {
        const result = await client.query('');
        return result;
    },

};