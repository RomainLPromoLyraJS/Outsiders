
const client = require('./client');

module.exports = {
    async getAllCategories() {
        const result = await client.query('select jsonb_build_object(\'category\', jsonb_agg(to_jsonb(c)||sport)) from category c join (select category_id, jsonb_build_object(\'sport\', jsonb_agg(to_jsonb(s) - \'category_id\')) as sport from sport s group by s.category_id) s on s.category_id = c.id');
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