const {db} = require('../postgres');
const { Status } = require('../../models/status_model');

exports.getStatuses = async () => {
    const result = await Status.findAll();
    return result;
};

exports.getStatus = async (status_id) => {
    const result = await Status.findByPk(status_id);
    return result;
};


