const express = require('express');

const router = express.Router();

// GET /api/users
router.get('/', (req, res, next) => {
  res.send('Users route');
});

module.exports = router;
