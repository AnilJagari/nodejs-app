const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js App!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});

module.exports = app;
