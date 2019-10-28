
const validateTopicInput = require('../validation/topicValidation');
const topicDal = require('../dal/topic_dal');
const Promise = require('bluebird');
const cloud = require('../config/cloudinaryConfig');

exports.createTopic = (req, res) => {
  const name = req.body.name;
  const category = req.body.category;
  const description = req.body.description;
  const imageUrl = req.files[0].path;
    // Form validation
 const { errors, isValid } = validateTopicInput({name,category,description});
 // Check validation
   if (!isValid) {
     return res.status(400).json(errors);
   }
   else
 return topicDal.findOne({ name: req.body.name })

    .then(topic => {
     if (topic) {
         return Promise.reject(res.json('Topic is already exist'));
      } 
     else 
     return cloud.uploads(imageUrl,'topicsImages/')
          
     
   })
   .then(saved => {
     image = saved;
     return topicDal.create({name,category,description,imageUrl:image.url,imageId:image.id}) 
   })
  //  .then(saved => {
  //    image = saved;
  //    return imageDal.create(image)
  //  })
   .then(topic => res.json(topic))
   .catch(reject => res.end(reject));
};

exports.findTopics =(req,res)=>
{
  topicDal.findAll()
  .then(topics=>{
    res.json(topics)
  })
}

