const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the public folder
app.use(express.static('public'));


// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../public/index.html')));

// Handle GET requests to the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.post('/send-email', (req, res) => {
  // Handle email sending logic
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
