const { Task } = require('../mongoose');

exports.getTasks = async () => {
    return await Task.find({});;
};

exports.getTask = async (task_id) => {
    return  await Task.findById(task_id).exec();
};

exports.addTask = async (task) => {
    let result = await Task.create(task);
    return  result;
}

exports.editTask = async (id, new_value) => {
    let result = await Task.findOneAndUpdate({ _id: id}, new_value);
    return result;
}

exports.deleteTask = async (task_id) => {
    let result = await Task.findOneAndDelete({ _id: task_id });
    return result;
}
