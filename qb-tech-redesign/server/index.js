const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
require('dotenv').config();

// Models - Import these to ensure the connection is aware of them
const Job = require('./models/Job');
const Inquiry = require('./models/Inquiry');

// Routes
const jobRoutes = require('./routes/jobRoutes');
const inquiryRoutes = require('./routes/inquiryRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Apply Routes
app.use('/api/jobs', jobRoutes);
app.use('/api/contact', inquiryRoutes);

const PORT = process.env.PORT || 5000;

// Authenticate and Start Server
// We use .authenticate() instead of .sync() to just check the connection
sequelize.authenticate()
    .then(() => {
        console.log('✅ Connected to MySQL Database');
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('❌ Unable to connect to the database:', err);
    });