const winston = require('winston');
const mongoose = require('mongoose');
// const passport = require('passport');

module.exports = function(app){
    // DB Config
const db = require('../config/appConfig').MONGODB_URL;
// Connect to MongoDB
mongoose.set('useFindAndModify', false);
mongoose.connect(db,{ useNewUrlParser: true })
        .then(() => winston.info("MongoDB successfully connected"))
        .catch(err => winston.info(err));
}