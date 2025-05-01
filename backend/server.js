const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const memberRoutes = require('./routes/memberRoutes');
const path = require('path');

const app = express();

mongoose.connect('mongodb://localhost:27017/teamDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Your main API route
app.use('/api/members', memberRoutes);

// ✅ Add a test route to check server is working
app.get('/test', (req, res) => {
  res.send('Backend is working fine');
});

// ✅ Use PORT 5001 to avoid conflict with AirTunes
app.listen(5001, () => console.log('Server running on port 5001'));