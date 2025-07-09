mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
    investmnetName: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['stocks', 'bonds', 'mutual funds', 'real estate', 'cryptocurrency'],
        required: true,
    },
    amount: {
        type: Number,
        required: true,
        min: 0,
    },
    returnRate: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Investment', investmentSchema);