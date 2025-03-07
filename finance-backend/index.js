const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();

// Middleware
//apply cors globally
app.use(
  cors({
    origin: 'http://localhost:5173', //to allow frontend to access backend
    credentials: true, //allow cookies and authorization headers
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/accounts', require('./routes/accountRoutes')); //Account Routes
app.use('/api', require('./routes/transactionRoutes'));//transaction Routes
app.use('/api', require('./routes/expenseRoutes'));
app.use('/api', require('./routes/authRoutes'));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB', err);
  });

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});
