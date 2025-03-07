const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
  accountType: {
    type: String,
    required: true,
  }, //Savings, Checking, Credit, Loan etc.
  accountNumber: {
    type: String,
    required: true,
    unique:true,
  },
  accountAmount: {
    type: Number,
    required: true,
  },
  accountProvider: {
    type: String,
    required: true,
  },//HDFC, ICICI,SBI,Axis etc..
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
