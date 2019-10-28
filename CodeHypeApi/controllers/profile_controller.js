'use strict';

const userDal = require('../dal/user_dal');
const profileDal = require('../dal/profile_dal');
const cloud = require('../config/cloudinaryConfig'); 
const Promise = require('bluebird');

exports.findAll = (req, res) => {
    return profileDal.findAll()
        .then(profiles => {
           res.json(profiles);
        });
};

exports.validateOne = (req, res, next, id) => {
    profileDal.findOne({_id: id})
        .then(profile => {
            if (!profile) {
                res.json(`Profile does not exist`);
            } else {
                // req.profile = profile;
                next();
            }
        });
};

exports.findOne = (req, res) => {
    res.json(req.profile);
};



// exports.update = (req,res) =>{
//   const imageUrl = req.files[0].path;
//    const user = req.params.id;

//    userDal.findOne({ _id: user })
//    .then(found =>{
//     if (!found) {
//         return Promise.reject(res.json('user is doesnt found'));
//      } 

//      else
//     return cloud.uploads(imageUrl,'usersImages/')
//    })
     
// //  return cloud.uploads(imageUrl,'usersImages/')        
//    .then(saved => {
//        image = saved;
//      return profileDal.update({userId:user,imageUrl:image.url,imageId:image.id}) 
//    })
//   //  .then(saved => {
//   //    image = saved;
//   //    return imageDal.create(image)
//   //  })
//    .then(profile => res.json(profile))
//    .catch(reject => res.reject);
// }


// // exports.update = (req,res) =>{
// //   const imageUrl = req.files[0].path;
// //   const user = req.params.id;

// //   profileDal.findOne({ _id: user })

// //   .then(found => {
// //    if (!found) {
// //        return Promise.reject(res.json('Profile is doesnt found'));
// //     } 
// //    else 
// //    return Promise.resolve (cloud.uploads(imageUrl,'usersImages/'))
        
   
// //  })
// // //  return cloud.uploads(imageUrl,'usersImages/')        
// //    .then(saved => {
// //        image = saved;
// //      return profileDal.updateOne({imageUrl:image.url,imageId:image.id}) 
// //    })
// //   //  .then(saved => {
// //   //    image = saved;
// //   //    return imageDal.create(image)
// //   //  })
// //    .then(profile => res.json(profile))
// //    .catch(reject => res.end(reject));
// // }

