const Income = require('../models/Income');
const Expense = require('../models/Expense');
const { isValidObjectId, Types } = require('mongoose');

//Dashboard
exports.getDashboardData = async (req, res) => {
  try {
    const userId = req.user.id;

    //Check if userId is valid
    if (!isValidObjectId(userId)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const userObjectId = new Types.ObjectId(String(userId));

    //Get total income and expense
    const totalIncome = await Income.aggregate([
      { $match: { userId: userObjectId } },
      { $group: { _id: null, total: { $sum: '$amount' } } },
    ]);

    console.log('totalIncome', {
      totalIncome,
      userId: isValidObjectId(userId),
    });

    const totalExpense = await Expense.aggregate([
      { $match: { userId: userObjectId } },
      { $group: { _id: null, total: { $sum: '$amount' } } },
    ]);
    console.log('totalExpense', {
      totalExpense,
      userId: isValidObjectId(userId),
    });

    //Fetch recent 5 transactions
    const recentTransactions = [
      ...(await Income.find({ userId }).sort({ date: -1 }).limit(5)).map(
        (txn) => ({
          ...txn.toObject(),
          type: 'income',
        })
      ),
      ...(await Expense.find({ userId }).sort({ date: -1 }).limit(5)).map(
        (txn) => ({
          ...txn.toObject(),
          type: 'expense',
        })
      ),
    ].sort((a, b) => b.date - a.date); // sort by latest date

    //response
    res.json({
      totalBalance:
        (totalIncome[0]?.total || 0) - (totalExpense[0]?.total || 0),
      totalIncome: totalIncome[0]?.total || 0,
      totalExpenses: totalExpense[0]?.total || 0,
      recentTransactions: recentTransactions,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};
