const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.send('<h1>Hello MERN</h1>');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is running at port: ${PORT}`);
});
