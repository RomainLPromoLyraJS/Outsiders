module.exports = {
    async error404(req, res) {
        if (! res.locals.notFound) {
            res.locals.notFound = "route";
        }

        res.status(404).json({
            error: {
                code: 404,
                type: "not found",
                message: `${res.locals.notFound} not found`
            }
        });
    },

    async error500(error, req, res, next) {
        res.status(500).json({
            error: {
                code: 500,
                type: "fatl error",
                details: error
            }
        });
    },
};
