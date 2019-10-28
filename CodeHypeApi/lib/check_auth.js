// Load Modules
const jwt = require('jsonwebtoken');

// Get Config file
const config = require('../config/appConfig');

module.exports = (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const decoded = jwt.verify(token, config.JWT_KEY);

      // Add the user data to the request
      req.userData = decoded;

      next();
    } catch {
      return res.status(401).json({
        message: 'Auth Failed'
      });
    }
};