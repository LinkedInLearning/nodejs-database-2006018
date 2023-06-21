const { Task } = require('../mongoose');

exports.getTasks = async () => {
    return await Task.find({});;
};

exports.getTask = async (task_id) => {
    return await Task.findById(task_id).exec();
};

exports.addTask = async (task) => {
    let result = await Task.create(task);
    return  result;
}

exports.editTask = async (id, new_value) => {
    return undefined
}

exports.deleteTask = async (task_id) => {
    return undefined
}
