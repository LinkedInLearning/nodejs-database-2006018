const { Schema }  = require('mongoose');
const { StatusSchema } = require('./status_model');

exports.TaskSchema = new Schema({
    name: { type: String, required: 'The name is required'},
    description: { type: String},
    status_id: {
        type: Schema.Types.ObjectId,
        ref: 'Status'
    }
});

