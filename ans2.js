const express = require('express');
const app = express();
const port = 3125;
// Initial counter value
let counter = 0;


app.use(express.json());


app.get('/', (req, res) => {
  res.json({ counter });
});

app.post('/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

app.post('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
