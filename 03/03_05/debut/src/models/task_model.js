const { Schema }  = require('mongoose');

exports.TaskSchema = new Schema({
    name: { type: String, required: 'The name is required'},
    description: { type: String}
});

