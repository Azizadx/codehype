const User = require('../models/User');
exports.create = data => new User(data).save();

exports.findOne = query => User.findOne(query).populate('profile').exec();

exports.findAll = query => User.find(query).exec();
