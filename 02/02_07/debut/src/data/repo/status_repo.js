const {Status} = require('../postgres');

exports.getStatuses = async () => {
    const result = await Status.findAll();
    return result;
};

exports.getStatus = async (status_id) => {
    const result = await Status.findByPk(status_id);
    return result;
};

exports.findStatus = async (filter) => {
    return await Status.findOne(filter);
}