const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['savings', 'checking', 'credit', 'investment'],
        required: true,
    },
    balance: {
        type: Number,
        required: true,
        default: 0,
    },
});

module.exports = mongoose.model('Account', accountSchema);