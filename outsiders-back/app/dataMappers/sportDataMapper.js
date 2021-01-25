
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

    async updateOneSport(sportId, sportToUpdate) {

        const result = await client.query('UPDATE "sport" SET "title"=$1, "description"=$2, "category_id"=$3 WHERE id=$4 RETURNING *', [sportToUpdate.title, sportToUpdate.description, sportToUpdate.category_id, sportId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async deleteOneSport(idSportToDelete) {
        const result = await client.query('DELETE FROM "sport" WHERE id=$1 RETURNING *', [idSportToDelete]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

};