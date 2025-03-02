const User = require('../models/user');

const test = (req, res) => {
  res.json('test is working');
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //check if user exists
    if (!name || !email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
    //check if password is long enough
    if (password.length < 6) {
      return res
        .status(400)
        .json({ msg: 'Password must be at least 6 characters' });
    }
    //check if email is valid
    //check if email is already in use
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ msg: 'Email already in use' });
    }

    const user = await User.create({ name, email, password });
    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  test,
  registerUser,
};
