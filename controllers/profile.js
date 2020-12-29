const { validationResult } = require('express-validator');
const Profile = require('../models/profile');

exports.getUserProfile = async (req, res, next) => {
  try {
    const profile = await Profile.findOne({
      userId: req.user.id,
    }).populate('user', ['name, avatar']);
    if (!profile) return res.status(404).json({ msg: 'Profile not found' });
    res.status(200).json({ profile });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.createOrUpdateProfile = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({
      error: errors.array(),
    });

  const {
    company,
    website,
    location,
    status,
    skills,
    bio,
    githubusername,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
  } = req.body;

  const profileFilds = {};
  profileFilds.userId = req.user.id;
  profileFilds.status = status;

  if (company) profileFilds.company = company;
  if (website) profileFilds.website = website;
  if (location) profileFilds.location = location;
  if (bio) profileFilds.bio = bio;
  if (githubusername) profileFilds.githubusername = githubusername;

  if (skills) {
    profileFilds.skills = skills.split(',').map((skill) => skill.trim());
  }

  profileFilds.social = {};
  if (youtube) profileFilds.social.youtube = youtube;
  if (twitter) profileFilds.social.twitter = twitter;
  if (facebook) profileFilds.social.facebook = facebook;
  if (instagram) profileFilds.social.instagram = instagram;
  if (linkedin) profileFilds.social.linkedin = linkedin;

  try {
    let profile = await Profile.findOne({ userId: req.user.id });
    if (profile) {
      // Update
      profile = await Profile.findOneAndUpdate(
        {
          userId: req.user.id,
        },
        { $set: profileFilds },
        { new: true }
      );
      return res.status(200).json(profile);
    }

    // Create
    profile = new Profile(profileFilds);
    await profile.save();
    res.status(200).json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
