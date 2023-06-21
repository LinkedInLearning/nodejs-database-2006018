const repo = require('../data/repo/task_repo');


exports.getTasks = async () => {
    return  await repo.getTasks();
}

exports.getTask = async (id) => {
    return await repo.getTask(id);
}

exports.addTask = async (task) => {
    try {
        let result = await  repo.addTask(task);
        return result;
    } catch (error) {
        return undefined;
    }
}

