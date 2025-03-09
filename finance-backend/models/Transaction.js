const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account', // Referrence to account model
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    enum: ['Credit', 'Debit'],
    required: true,
  },
  category: {
    type: String,
    required: true,
  }, //Add category field
});

const Transaction = mongoose.model('Transaction', transactionSchema);
module.exports = Transaction;
