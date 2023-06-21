const statusService = require('../services/statusService');


exports.routes = (app) => {
    // Status routes
    app.route('/statuses')
        .all((req, res, next) => next())
        .get(async (req, res) => {
            let result = await statusService.getStatuses();
            res.json(result);
        });


};