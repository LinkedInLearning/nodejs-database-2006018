const { statusRoutes} = require('./status_routes');
const { taskRoutes } = require('./task_Routes');

exports.routes = (app) => {
    statusRoutes(app);
    taskRoutes(app);
};