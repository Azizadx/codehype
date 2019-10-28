const Profile = require('../models/Profile');

exports.create = data => new Profile(data).save();

exports.findOne = query => Profile.findOne(query).exec();

exports.findAll = query => Profile.find(query).exec();

exports.update = (data) => Profile.update(data);