const Topic = require('../models/Topic');
exports.create = data => new Topic(data).save();
exports.findOne = query => Topic.findOne(query).exec();
exports.findAll = query => Topic.find(query).exec();
