const { statusRoutes} = require('./statusRoutes');

exports.routes = (app) => {
    statusRoutes(app);
};