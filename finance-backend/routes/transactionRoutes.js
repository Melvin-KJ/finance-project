const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');

// Create a new transaction
router.post('/transactions', async (req, res) => {
  try {
    console.log('Received data', req.body); //debugging

    const { accountId, name, amount, date, type, category } = req.body;

    //validation
    if (!accountId || !name || !amount || !date || !type || !category) {
      return res.status(400).json({ error: 'Please fill all fields' });
    }

    const transaction = new Transaction({
      accountId,
      name,
      amount,
      date,
      type,
      category,
    });

    await transaction.save();
    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add transaction' });
  }
});

//Get all transactions for all accounts
router.get('/transactions', async (req, res) => {
  try {
    const { type } = req.query;

    //Filter by the type if provided
    const filter = type ? { type } : {};

    const transactions = await Transaction.find(filter).populate(
      'accountId',
      'name'
    ); // Populate account details

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the transactions' });
  }
});

//Get transactions for a specific account
router.get('/transactions/:accountId', async (req, res) => {
  try {
    const { accountId } = req.params;
    const { type } = req.query;

    const filter = { accountId };
    if (type) {
      filter.type = type; // Apply category filter if provided
    }

    const transactions = await Transaction.find(filter);

    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
});

module.exports = router;
