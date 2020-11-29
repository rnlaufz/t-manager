const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const taskSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    urgent: {
        type: Boolean,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    date: {
       type: Date, 
       default: Date.now 
    }
})

module.exports = Task = mongoose.model('task', taskSchema);