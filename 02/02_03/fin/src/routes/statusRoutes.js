const service  = require('../services/statusService');


exports.statusRoutes = (app) => {
    app.route('/statuses')
    .all((req, res, next) => next())
    .get(async (req, res) => {
        let result = await service.getStatuses();
        res.json(result);
    });
};