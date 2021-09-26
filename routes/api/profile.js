const express = require('express');
const { check } = require('express-validator');
const checkAuth = require('../../middleware/auth');
const profileController = require('../../controllers/profile');

const router = express.Router();

// GET /api/profile
// Gets all the profiles
router.get('/', profileController.getAllProfiles);

// GET /api/profile/me
router.get('/me', checkAuth, profileController.getUserProfile);

// GET /api/profile/user/:user_id
// Gets a single user profile
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

// PUT /api/profile/education
router.put(
    '/education',
    checkAuth,
    [
        check('school', 'School is required').notEmpty(),
        check('degree', 'Degree or Certificate is required').notEmpty(),
        check('fieldofstudy', 'Field of study is required').notEmpty(),
        check('from', 'From is required').notEmpty(),
    ],
    profileController.addEducation
);

// DELETE /api/profile/education/edu_id
// Removes selected education
router.delete('/education/:edu_id', checkAuth, profileController.removeEduById);

// GET /api/profile/github/:username
// Gets user repos form github
router.get('/github/:username', profileController.getUserRepos);

module.exports = router;
