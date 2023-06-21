const { CONNECTIONSTRING }  = process.env;
const { TaskSchema}  = require('../models/task_model');
const { StatusSchema } = require('../models/status_model');

const mongoose = require('mongoose');
const task = mongoose.model('Task', TaskSchema);
const status = mongoose.model('Status', StatusSchema);

(async () => {
    try {
        await mongoose.connect(CONNECTIONSTRING);        
        console.log('connected');
    } catch (error) {
        console.log(`Failed to connect to mongodb`);
    }
})();

exports.db = mongoose;
exports.Task = task;
exports.Status = status;
