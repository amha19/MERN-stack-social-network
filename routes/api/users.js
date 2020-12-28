const express = require('express');
const { check } = require('express-validator');
const userController = require('../../controllers/users');

const router = express.Router();

// POST /api/users
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password must be at least 6 characters').isLength({
      min: 6,
    }),
  ],
  userController.createUser
);

module.exports = router;
