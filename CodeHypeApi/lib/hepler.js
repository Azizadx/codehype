const Promise = require('bluebird');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');
const keys = require('../config/appConfig');
const cloud = require('cloudinary');
const multer = require('multer');
// var multer = require('multer');
// var path = require('path');


exports.containsId = (obj, array) => {
    const length = array.length;
    if (length <= 0) return false;
    for (let i = 0; i < length; i++) {
        if (obj._id.equals(array[i])) {
            return true;
        } 
    }
    return false;
};



exports.generateToken = user => {
    const token = jwt.sign(
        {userName: user.userName,userId: user._id},
        keys.JWT_KEY,
        {expiresIn: "1d"}
      );
    return Promise.resolve(token);
};


exports.comparePassword = (password, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, valid) => {
            if (err) {
                reject(`Password comparison failed: ${err}`);
            } else {
                resolve(valid);
            }
        });
    });
};


exports.hashPassword = (password, salt) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, salt, null, (err, hash) => {
            if (err) {
                reject(`Hashing password failed: ${err}`);
            } else {
                resolve(hash);
            }
        });
    });
};


exports.genSalt = () => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            if (err) {
                reject(`Generating salt failed: ${err}`);
            } else {
                resolve(salt);
            }
        });
    });
};




// //set Multer 
// //multer.diskStorage() creates a storage space for storing files. 
// exports.upload = ()=> {var storage = multer.diskStorage({
// destination:function(req, file,cb){
// if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
// cb(null, './uploads');
// }else{
// cb({message: 'this file is neither a video or image file'}, false)
// }
// },
// filename: function(req, file, cb){
// cb(null, file.originalname);
// }
// })
// }
//  = multer({storage:storage});

  
  
  
  