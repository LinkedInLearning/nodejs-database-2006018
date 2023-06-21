const service  = require('../services/status_service');


exports.statusRoutes = (app) => {
    app.route('/statuses')
    .all((req, res, next) => next())
    .get(async (req, res) => {
        let result = await service.getStatuses();
        res.json(result);
    });
    
    app.route('/statuses/:id')
    .get(async (req, res, next) => {
        let result = await service.getStatus(req.params.id);
        res.json(result);
    });
};


