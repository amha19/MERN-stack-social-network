const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  // Get token from header
  const token = req.header('x-auth-token');

  // If there is no token
  if (!token)
    return res.status(401).json({ msg: 'No token, authorization denied' });

  // verify user
  try {
    const decoded = jwt.verify(token, config.get('JWT_KEY'));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({
      msg: 'Token is not valid',
    });
  }
};
