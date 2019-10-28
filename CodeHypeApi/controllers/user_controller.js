
const validateUserInput = require('../validation/userInput');
const userDal = require('../dal/user_dal');
const profileDal = require('../dal/profile_dal');
const hepler = require('../lib/hepler'); 
const Promise = require('bluebird');
const cloud = require('../config/cloudinaryConfig')


exports.signUp = (req, res) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  //  const imageUrl = req.file[0].path;
    // Form validation
 const { errors, isValid } = validateUserInput.validateRegisterInput({userName,email,password});
 // Check validation
   if (!isValid) {
     return Promise.reject(res.status(400).json(errors)); 
   }
   else
 return userDal.findOne({ userName: req.body.userName })

    .then(user => {
     if (user) {
       return Promise.reject(res.status(400).json({ userName: "userName already exists" }));
     } 
     else 
     return userDal.findOne({email:req.body.email});
   })
   .then(found =>{
      if(found)
      return Promise.reject(res.status(400).json({email: 'Email already exists'}));
      else
      return hepler.genSalt();
   })
   .then(salt => hepler.hashPassword(password,salt))
   .then(hash => 
    // var image= cloud.uploads(imageUrl,'usersImages/');
     userDal.create({userName,email,password:hash})
    )
   .then(savedUser=>
    {
      userProfile = savedUser;
    return profileDal.create({userId:userProfile._id});
    })
    // .then(profile => userDal.update(user, {profile: profile}))
   .then(user => res.json(user))
   .catch(() => res.reject);
};


// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
exports.login = (req, res) => {
    // Form validation
    let userName, password, user;
    // let user;
    const { errors, isValid } =  validateUserInput.validateLoginInput(req.body);
    // Check validation
      if (!isValid) {
        return res.status(400).json(errors);
      }
      userName = req.body.userName;
      password = req.body.password;
    // Find user by email
    userDal.findOne({ userName })
    .then(found => {
        // Check if user exists
        if (!found) 
        {
          return Promise.reject(res.json('Invalid userName or Password'));
        }
        else{
          user = found;
          return hepler.comparePassword(password,user.password)
        }
      })

      .then(valid => {
        if(valid)
        {return hepler.generateToken(user);}
        else
        return Promise.reject(res.json('Invalid userName or Password'));
      })

     .then(token => {
        res.json([token, user]);
    })

    .catch(reject => res.json(reject));
  
  }

exports.validateOne = (req, res, next, id) => {
    userDal.findOne({_id: id})
        .then(user => {
            if (!user) {
                result.error(`Profile with _id ${id} does not exist`, res);
            } else {
                req.user = user;
                next();
            }
        });
};



exports.update = (req,res) =>{
    const imageUrl = req.files[0].path;
    const user = req.params.id;
      cloud.uploads(imageUrl,'usersImages/')
    //  return cloud.uploads(imageUrl,'usersImages/')        
     .then(saved => {
         image = saved;
       return profileDal.update({userId:user,imageUrl:image.url,imageId:image.id}); 
     })
     .then(profile => res.json(profile))
     .catch(reject => res.json(reject))
     
    }


//   exports.findProfile = (req, res) => {
//     userDal.findOne(req.profile)
//     .then(profile=>{
//       res.json(profile)
//     })
// };


  

