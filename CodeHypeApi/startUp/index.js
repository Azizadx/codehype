
// const error = require('../middleware/error');
const bodyParser = require("body-parser");
const express = require('express');
const path = require('path');
const multer = require('multer');
// const auth = requir../lib/check_authuth');


module.exports = function(app){
    // app.use(express.static(path.join(__dirname, 'public')))
    // app.use('/uploads', express.static('uploads'))
    app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: false}));
     
    //  app.use(multer({ dest: './uploads/'}));
    // app.use(passport.initialize,require('../config/passport'));
    // app.use('/codeHype',require('../routes/home'));
    app.use('/codeHype/users',require('../routes/user'));
    app.use('/codeHype/profile',require('../routes/profile'));
     app.use('/codeHype/topics',require('../routes/topic'));
    // app.use('/codeHype/recommand',require('../routes/linklist'));
     app.use('/codeHype/profile',require('../routes/profile'));
    // app.use(error);
    
} 
