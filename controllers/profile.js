const { validationResult } = require('express-validator');
const axios = require('axios');
const config = require('config');
const Profile = require('../models/profile');
const User = require('../models/user');
const Post = require('../models/post');

exports.getAllProfiles = async (req, res, next) => {
    try {
        const profiles = await Profile.find().populate(
            'userId',
            'name, avatar'
        );
        if (!profiles) return res.status(400).json({ msg: 'No profile found' });
        res.status(200).json({ profiles });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getUserProfile = async (req, res, next) => {
    try {
        const profile = await Profile.findOne({
            userId: req.user.id,
        }).populate('userId', 'name avatar');
        if (!profile) return res.status(400).json({ msg: 'Profile not found' });
        res.status(200).json({ profile });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getProfileByUserId = async (req, res, next) => {
    try {
        const profile = await Profile.findOne({
            userId: req.params.user_id,
        }).populate('userId', 'name avatar');
        if (!profile) return res.status(400).json({ msg: 'Profile not found' });
        res.status(200).json({ profile });
    } catch (err) {
        if (err.kind === 'ObjectId')
            return res.status(400).json({ msg: 'Profile not found' });
        console.error(err);
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

exports.deleteUser = async (req, res, next) => {
    try {
        await Post.deleteMany({ userId: req.user.id });
        await Profile.findOneAndRemove({ userId: req.user.id });
        await User.findOneAndRemove({ _id: req.user.id });

        res.status(200).json({ msg: 'User removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.addExperience = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({
            error: errors.array(),
        });

    const { title, company, location, from, to, current, description } =
        req.body;
    const newExp = { title, company, location, from, to, current, description };

    try {
        const profile = await Profile.findOne({ userId: req.user.id });

        if (!profile) return res.status(400).json({ msg: 'Profile not found' });

        profile.experience.unshift(newExp);

        await profile.save();

        res.status(200).json({ profile });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.removeExpById = async (req, res, next) => {
    try {
        const profile = await Profile.findOne({ userId: req.user.id });

        if (!profile) return res.status(400).json({ msg: 'Profile not found' });

        const newExp = profile.experience.filter(
            (exp) => exp._id.toString() !== req.params.exp_id
        );
        profile.experience = newExp;

        await profile.save();

        res.status(200).json({ profile });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.addEducation = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({
            error: errors.array(),
        });

    const { school, degree, fieldofstudy, from, to, current, description } =
        req.body;

    const newEdu = {
        school,
        degree,
        fieldofstudy,
        from,
        to,
        current,
        description,
    };

    try {
        const profile = await Profile.findOne({ userId: req.user.id });

        if (!profile) return res.status(400).json({ msg: 'Profile not found' });

        profile.education.unshift(newEdu);

        await profile.save();

        res.status(200).json({ profile });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.removeEduById = async (req, res, next) => {
    try {
        const profile = await Profile.findOne({ userId: req.user.id });

        if (!profile) return res.status(400).json({ msg: 'Profile not found' });

        const newEdu = profile.education.filter(
            (edu) => edu._id.toString() !== req.params.edu_id
        );
        profile.education = newEdu;

        await profile.save();

        res.status(200).json({ profile });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

exports.getUserRepos = async (req, res, next) => {
    try {
        const uri = encodeURI(
            `https://api.github.com/users/${req.params.username}/repos?per_page=5&sort=created:asc`
        );
        const headers = {
            'user-agent': 'node.js',
            Authorization: `token ${config.get('GITHUB_TOKEN')}`,
        };

        const gitHubRes = await axios.get(uri, { headers });

        res.json(gitHubRes.data);
    } catch (err) {
        console.error(err.message);
        res.status(404).json({ msg: 'No Github profile found' });
    }
};
