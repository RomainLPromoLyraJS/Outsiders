module.exports = {
    async error404(req, res) {
        if (! res.locals.notFound) {
            res.locals.notFound = "route not found";
        }

        res.status(404).json({
            error: {
                code: 404,
                type: "not found",
                message: `${res.locals.notFound}`
            }
        });
    },

    async error500(error, req, res, next) {
        res.status(500).json({
            error: {
                code: 500,
                type: "fatal error",
                details: error
            }
        });
    },
};
