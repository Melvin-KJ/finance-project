const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const incomeRoutes = require('./routes/incomeRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

const app = express();

// Middleware
//apply cors globally
app.use(
  cors({
    origin: process.env.CLIENT_URL || '*', //to allow frontend to access backend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// Routes
// app.use('/api/accounts', require('./routes/accountRoutes')); //Account Routes
// app.use('/api', require('./routes/transactionRoutes')); //transaction Routes
// app.use('/api', require('./routes/expenseRoutes'));
// app.use('/api', require('./routes/authRoutes'));

connectDB();

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);

// Server uploads folder
app.use("/uploads",express.static(path.join(__dirname, "uploads")));


app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});
