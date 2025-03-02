const express = require('express');
const router = express.Router();
const Expense = require('../models/Expense');

// Add an expense
router.post('/expenses', async (req, res) => {
  try {
    const { name, amount, date, category } = req.body;
    const expense = new Expense({
      name,
      amount,
      date,
      category,
    });
    await expense.save();
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add expense' });
  }
});

// Get all expenses
router.get('/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get expenses' });
  }
});

// Edit an expense
router.put('/expenses/:id', async (req, res) => {
  try {
    const { name, amount, date, category } = req.body;
    const updateExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      {
        name,
        amount,
        date,
        category,
      },
      { new: true }
    );
    res.status(200).json(updateExpense);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update expense' });
  }
});

// Delete an expense
router.delete('/expenses/:id', async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete expense' });
  }
});

module.exports = router;
