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


connectDB();


const allowedOrigins = [
  "http://localhost:5173", 
  "https://module-end-asgnmnt5.vercel.app", 
  "https://module-end-asgnmnt5-git-main-shifa-m312s-projects.vercel.app",
  "https://module-end-asgnmnt5-3ui3c0m9g-shifa-m312s-projects.vercel.app"
];

app.use(cors({
    origin: function (origin, callback) {
      
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Blocked by CORS policy'));
      }
    },
    credentials: true
})); 

app.use(express.json()); 
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/profile', userProfileRoutes);
app.use('/api/analytics', analyticsRoutes);


app.get('/', (req, res) => {
  res.send('Server is alive and connected to MongoDB!');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`-----------------------------------------`);
  console.log(`🚀 Server started on http://localhost:${PORT}`);
  console.log(`-----------------------------------------`);
});


app.use(errorHandler);
