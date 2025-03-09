const User = require('../models/user');
const jwt = require('jsonwebtoken');

// generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

//Register User
exports.registerUser = async (req, res) => {
  const { fullName, email, password, profileImageUrl } = req.body;

  //Validation
  if (!fullName || !email || !password) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  try {
    //check if email exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    //Create user
    const user = await User.create({
      fullName,
      email,
      password,
      profileImageUrl,
    });

    res.status(201).json({
      id: user._id,
      user,
      token: generateToken(user._id),
    });
  } catch (err) {
    res.status(500).json({
      message: 'Registering User Error',
      error: err.message,
    });
  }
};

//Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
//validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }
  try{
    const user = await User.findOne({ email });
    if(!user || !(await user.comparePassword(password))){
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({
      id: user._id,
      user,
      token: generateToken(user._id),
    });
    
  }catch(err){
    res.status(500).json({
      message: 'Registering User Error',
      error: err.message,
    });
  }
};

//Get User Info
exports.getUserInfo = async (req, res) => {
  try{
    const user = await User.findById(req.user.id).select("-password");

    if(!user){
      return res.status(400).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  }catch(err){
    res.status(500).json({
      message: 'Registering User Error',
      error: err.message,
    });
  }
};
