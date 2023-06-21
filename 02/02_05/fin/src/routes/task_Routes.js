const service = require('../services/task_service');

exports.taskRoutes = (app) => {
    app.route('/tasks')
    .all((req, res, next) => next())
    .get( async (req, res) => {
        let tasks = await service.getTasks();
        res.json(tasks);
    })
    .post(async (req, res, next) => {
        let data = req.body;
        let result = await service.addTask(data);
        res.json(result);
    });

    app.route('/tasks/:id')
    .get(async (req, res, next) => {
        let result = await service.getTask(req.params.id);
        res.json(result);
    })
};


