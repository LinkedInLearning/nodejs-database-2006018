const {db} = require('../postgres');
const { Task } = require('../../models/task_model');


exports.getTasks = async () => {
    const result = await Task.findAll();
    return result;
};

exports.getTask = async (task_id) => {
    const result = await Task.findByPk(task_id);
    return result;
};

exports.addTask = async (task) => {
    let result = await Task.create(task);
    await result.save();
    return result;
}
