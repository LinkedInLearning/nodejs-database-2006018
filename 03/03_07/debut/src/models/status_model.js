const { Schema }  = require('mongoose');


exports.StatusSchema = new Schema({
    name: { type: String, required: 'The name is required'},
    description: { type: String}
});