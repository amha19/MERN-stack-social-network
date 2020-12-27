const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db');
const authRoutes = require('./routes/api/auth');
const postsRoutes = require('./routes/api/posts');
const profileRoutes = require('./routes/api/profile');
const usersRoutes = require('./routes/api/users');

const app = express();

connectDB();
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/users', usersRoutes);

app.get('/', (req, res, next) => {
  res.send('<h1>Hello MERN</h1>');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App is running at port: ${PORT}`);
});
