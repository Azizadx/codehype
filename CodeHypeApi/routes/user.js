 const express = require('express');
 const router = express.Router();
const user = require('../controllers/user_controller');
const upload = require('../config/multerConfig');
const check_auth = require('../lib/check_auth');

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/sign-up",upload.any(),user.signUp);

  // @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
 router.post("/sign-in", user.login);

 router.param('/:id',user.validateOne);
router.put('/:id',check_auth,upload.any(),user.update);
 


 module.exports = router;