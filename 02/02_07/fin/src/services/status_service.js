const repo = require('../data/repo/status_repo');

exports.getStatuses = async () => {
    let result = await repo.getStatuses();
    return result;
}

exports.getStatus = async (id) => {
    return await repo.getStatus(id);
}

