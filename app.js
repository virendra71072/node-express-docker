const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// API Route 1: Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Node.js Express App!');
});

// API Route 2: Example GET route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Here is some data!' });
});

// API Route 3: Example POST route
app.post('/api/data', (req, res) => {
  const newData = req.body;
  res.json({ message: 'Data received!', data: newData });
});

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});