const express = require('express');
const app = express();

// route 1: homepage
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.get('/users', (req, res) => {
  res.send('This is the users page.');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
