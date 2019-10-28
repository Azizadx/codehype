 const express = require('express');
 const router = express.Router();
 const upload = require('../config/multerConfig');
 const check_auth = require('../lib/check_auth');

 const controller = require('../controllers/profile_controller')
 router.get('/', controller.findAll);

    router.param('id', controller.validateOne);
  //  router.put('/:id',check_auth,upload.any(),controller.update);
   router.get('/:id', controller.findOne);

 module.exports = router;