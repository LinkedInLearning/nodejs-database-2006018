const repo = require('../data/repo/task_repo');
const redis = require('../data/redis');
const { Types } = require('mongoose');

exports.getTasks = async () => {
    return  await repo.getTasks();
}

exports.getTask = async (id) => {
    let key = new Types.ObjectId(id);;
    let result = await redis.getItem(key);
    if (result != undefined) {
        console.log('redis');
        return result;
    }
    

    console.log('not found');
    return await repo.getTask(id);
}

exports.addTask = async (task) => {
    try {
        let result = await  repo.addTask(task);
        redis.addItem(result._id, result);
        return result;
    } catch (error) {
        console.log('Failed to add a new task.', error);
        return undefined;
    }
}

exports.editTask = async (task) => {
    try {
        let id = task.id;
        let entity = await repo.getTask(id);
        if (entity == null || entity === undefined) {
            return 'Invalid request';
        } else {      
            let result = await repo.editTask(entity, task);
            return result;
        }

    } catch (error) {
        console.log(`Failed to update the task wish id ${task.id}.`, error);
        return undefined;
    }
}

exports.deleteTask = async (task_id) => {
    let result = await repo.deleteTask(task_id);
    return result;
}

