const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    /* accountId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account',
        required: true,
    }, */
    type: {
        type: String,
        enum: ['income', 'expense', 'transfer'],
        required: true,
    },
    amount: {
        type: Number,
        required: true,
        min: 0,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    category: {
        type: String,
        enum: ['salary', 'groceries', 'utilities', 'entertainment', 'hobbies', 'other'],
        required: true,
    },
});

module.exports = mongoose.model('Transaction', transactionSchema);