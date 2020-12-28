const express = require('express');
const { check } = require('express-validator');
const checkAuth = require('../../middleware/auth');
const authController = require('../../controllers/auth');

const router = express.Router();

// GET /api/auth
router.get('/', checkAuth, authController.getUser);

// POST /api/auth
router.post(
  '/',
  [
    check('email', 'Valid email required').isEmail(),
    check('password', 'Password required').exists(),
  ],
  authController.login
);

module.exports = router;
