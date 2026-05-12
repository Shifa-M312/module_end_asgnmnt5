require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/dbConnection'); 
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authenticationRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userProfileRoutes = require('./routes/userProfileRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

// 3. Connect to the Database
connectDB();

// 4. Middleware
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
})); 
app.use(express.json()); 
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/profile', userProfileRoutes);
app.use('/api/analytics', analyticsRoutes);

// 5. Basic Test Route
app.get('/', (req, res) => {
  res.send('Server is alive and connected to MongoDB!');
});

// 6. Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`-----------------------------------------`);
  console.log(`🚀 Server started on http://localhost:${PORT}`);
  console.log(`-----------------------------------------`);
});
app.use(errorHandler);
