const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  accountType: {
    type: String,
    required: true,
    enum: ['Savings', 'Checking', 'Credit Card', 'Loan'],
  }, //Savings, Checking, Credit, Loan etc.
  accountNumber: {
    type: String,
    required: true,
    unique: true,
    match: /^[0-9]{10,16}$/,
  },
  accountAmount: {
    type: Number,
    required: true,
    default: 0,
  },
  accountProvider: {
    type: String,
    required: true,
    enum: ['HDFC', 'ICICI', 'SBI', 'Axis', 'CSB'],
  }, //HDFC, ICICI,SBI,Axis etc..
  bankName: {
    type: String,
    required: true,
  },
  branchName: {
    type: String,
    required: true,
  },
  transactions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Transaction',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Account', AccountSchema);
