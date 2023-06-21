const { Status } = require('../mongoose');


exports.getStatuses = async () => {
    return Status.find({});
};

exports.getStatus = async (status_id) => {
    return Status.findById(id).exec();
};

exports.findStatus = async (filter) => {
    return Status.findOne(filter).exec();
}


