const express = require('express');
const connectDB = require('./config/database');
const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/product');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api', productRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
