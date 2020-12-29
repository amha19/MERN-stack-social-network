const express = require('express');
const { check } = require('express-validator');
const checkAuth = require('../../middleware/auth');
const profileController = require('../../controllers/profile');

const router = express.Router();

// GET /api/profile
router.get('/', profileController.getAllProfiles);

// GET /api/profile/me
router.get('/me', checkAuth, profileController.getUserProfile);

// GET /api/profile/user/:user_id
router.get('/user/:user_id', checkAuth, profileController.getProfileByUserId);

// POST /api/profile
// Creates or updates a profile
router.post(
  '/',
  checkAuth,
  [
    check('status', 'Status is required').notEmpty(),
    check('skills', 'Skills is required').notEmpty(),
  ],
  profileController.createOrUpdateProfile
);

// DELETE /api/profile
// Deletes user, user profile and post
router.delete('/', checkAuth, profileController.deleteUser);

// PUT /api/profile/experience
router.put(
  '/experience',
  checkAuth,
  [
    check('title', 'Title is required').notEmpty(),
    check('company', 'Company is required').notEmpty(),
    check('from', 'From is required').notEmpty(),
  ],
  profileController.addExperience
);

// DELETE /api/profile/experience/exp_id
// Removes selected experience
router.delete(
  '/experience/:exp_id',
  checkAuth,
  profileController.removeExpById
);

module.exports = router;
