const { validationResult } = require('express-validator');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/user');

exports.createUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({
      error: errors.array(),
    });

  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email: email });
    if (user)
      return res.status(400).json({
        errors: [{ msg: 'User already exist' }],
      });

    const avatar = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' });
    const hashedPassword = await bcrypt.hash(password, 10);
    user = new User({
      name: name,
      email: email,
      password: hashedPassword,
      avatar: avatar,
    });

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get('JWT_KEY'),
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({ token });
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};
