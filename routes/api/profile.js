const express = require('express');
const { check } = require('express-validator');
const checkAuth = require('../../middleware/auth');
const profileController = require('../../controllers/profile');

const router = express.Router();

// GET /api/profile/me
router.get('/me', checkAuth, profileController.getUserProfile);

// POST /api/profile
// Creates or updates a profile
router.post(
  '/',
  [
    checkAuth,
    [
      check('status', 'Status is required').notEmpty(),
      check('skills', 'Skills is required').notEmpty(),
    ],
  ],
  profileController.createOrUpdateProfile
);

module.exports = router;
