
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 9000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/registrations', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Registration schema and model
const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  employeeId: String,
  dateOfBirth: String,
  department: String,
  experience: String,
  skills: String,
});

const Registration = mongoose.model('Registrations', registrationSchema);

// API route to handle registration data
app.post('/api/register', async (req, res) => {
  try {
    const formData = req.body;
    const registration = new Registration(formData);
    await registration.save();
    res.sendStatus(200);
  } catch (error) {
    console.error('Error saving registration:', error);
    res.status(500).send('Registration failed');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
