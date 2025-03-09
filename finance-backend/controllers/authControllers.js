const User = require('../models/User');
const { hashPassword, comparePassword } = require('../helpers/auth');
const jwt = require('jsonwebtoken');

const test = (req, res) => {
  res.json('test is working');
};

//Register endpoint
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //check if user exists
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Please enter all fields' });
    }
    //check if password is long enough
    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: 'Password must be at least 6 characters' });
    }
    //check if email is valid
    //check if email is already in use
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ error: 'Email is taken already' });
    }
    //hash password
    const hashedPassword = await hashPassword(password);

    //create user in database
    const user = await User.create({ name, email, password: hashedPassword });
    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ error: 'Something went wrong. Please try again' });
  }
};

//Login endpoint
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    //check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    //compare password
    const isMatch = await comparePassword(password, user.password);
    if (isMatch) {
      jwt.sign(
        { email: user.email, id: user._id, name: user.name },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res
            .cookie('token', token, {
              httpOnly: true, //Prevents XSS attacks
              sameSite: 'strict', // Prevents CSRF attacks
            })
            .json(user);
          return;
        }
      );
    } else {
      return res.status(400).json({ error: 'Passwords do not match' });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ error: 'Something went wrong. Please try again' });
  }
};

//Profile endpoint
const getProfile = async (req, res) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(400).json({ error: 'Not authorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
    if (err) {
      return res.status(400).json({ error: 'Invalid token' });
    }
    res.json(user);
  });
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
};
