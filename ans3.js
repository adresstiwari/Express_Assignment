const express = require('express');
const app = express();
const port = 3124; 


app.get('/', (req, res) => {
  res.send('I am homepage');
});

app.get('/about', (req, res) => {
  res.send('I am about page');
});

app.get('/contact', (req, res) => {
  res.send('support@pwskills.com');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
