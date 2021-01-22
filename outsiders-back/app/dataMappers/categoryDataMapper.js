
const client = require('./client');

module.exports = {
    async getAllCategories() {
        const result = await client.query('SELECT c.title, ARRAY_AGG(s.title) FROM category AS c, sport AS s WHERE s.category_id=c.id GROUP BY c.title');
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
        const result = await client.query('select category.title AS category, category.description, sport.title from sport join category on sport.category_id=category.id where category.id= $1', [categoryId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async updateOneCategory(categoryId, categoryToUpdate) {

        const result = await client.query('UPDATE "category" SET "title"=$1, "description"=$2 WHERE id=$3 RETURNING *', [categoryToUpdate.title, categoryToUpdate.description, categoryId]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async deleteOneCategory(idCategoryToDelete) {
        const result = await client.query('DELETE FROM "category" WHERE id=$1', [idCategoryToDelete]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

};