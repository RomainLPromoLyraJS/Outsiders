const categoryDataMapper = require('../dataMappers/categoryDataMapper');

module.exports = {
    async getAllCategories(req, res, next) {
        try {
            const allCategories = await categoryDataMapper.getAllCategories();
            res.json({
                data: allCategories
            });
        } catch(error) {
            next(error);
        }
    },

    async postNewCategory(req, res, next) {
        try {
            const categoryToCreate = req.body;
            const categoryCreated = await categoryDataMapper.postNewCategory(categoryToCreate);
            res.json({
                message: 'new category created',
                data: categoryCreated
            });
        } catch(error) {
            next(error);
        }
    },

    async getOneCategory(req, res, next) {
        try {
            const categoryId = req.params.id;
            const oneCategory = await categoryDataMapper.getOneCategory(categoryId);
            res.json({
                data: oneCategory
            });
        } catch(error) {
            next(error);
        }
    },

    async updateOneCategory(req, res, next) {
        try {
            const categoryId = req.params.id;
            const categoryToUpdate = req.body;

            const categoryUpdated = await categoryDataMapper.updateOneCategory(categoryId, categoryToUpdate);
            res.json({
                message: 'category updated',
                data: categoryUpdated
            });
        } catch(error) {
            next(error);
        }
    },

    async deleteOneCategory(req, res, next) {
        try {
            const idCategoryToDelete = req.params.id;
            const categoryDeleted = await categoryDataMapper.deleteOneCategory(idCategoryToDelete);
            res.json({
                message: 'category deleted',
                data: categoryDeleted
            });
        } catch(error) {
            next(error);
        }
    },


};