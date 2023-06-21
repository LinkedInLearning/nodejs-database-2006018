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

    try {
        let statuses = await status.find({});
        if (!statuses.length) {
            ["OPEN", "IN PROGRESS", "ON HOLD", "CANCELD", "DONE"].forEach( async (s) => {
                await status.create({ name: s, description: `Status is [${s}]` })
            });
        }
    } catch (error) {
        
    }
})();

exports.db = mongoose;
exports.Task = task;
exports.Status = status;
