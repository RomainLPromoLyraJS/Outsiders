
const client = require('./client');

module.exports = {
    async getAllCategories() {
        const result = await client.query('SELECT * FROM "category"');
        return result.rows;
    },

    async postNewCategory(categoryToCreate) {
        const result = await client.query('INSERT INTO "category"(title, description) VALUES ($1, $2) RETURNING *', [categoryToCreate.title, categoryToCreate.description]);
        if (result.rowCount == 0) {
            return null
        }
        return result.rows[0];

    },

    async getOneCategory(categoryId) {
        const result = await client.query('SELECT * FROM "category" WHERE "category".id = $1', [categoryId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    async updateOneCategory(categoryToUpdate) {

        const result = await client.query('');
        return result;
    },

    async deleteOneCategory(idCategoryToDelete) {
        const result = await client.query('');
        return result;
    },

};