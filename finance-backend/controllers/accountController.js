const Account = require('../models/Account');

//Create Account for add account button
exports.createAccount = async (req, res) => {
  try {
    const account = new Account(req.body);
    await account.save();
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Get All Accounts
exports.getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find().populate('transactions');
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Get Single Account (optional for future usecase)
exports.getAccount = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id).populate(
      'transactions'
    );
    if (!account) return res.status(400).json({ message: 'Account not found' });
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Update Account for edit account button
exports.updateAccount = async (req, res) => {
  try {
    const account = await Account.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(account);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Delete Account for remove account button
exports.deleteAccount = async (req, res) => {
  try {
    await Account.findByIdAndDelete(req.params.id);
    res.json({ message: 'Account deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
