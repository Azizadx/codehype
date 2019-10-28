const express = require('express');
const router = express.Router();
const upload = require('../config/multerConfig');
const Topic = require('../controllers/topic_controller');


router.get('/',Topic.findTopics);
router.post('/',upload.any(),Topic.createTopic);//create new Topic

 
// router.get('/', Topic.findAll);

  module.exports = router;