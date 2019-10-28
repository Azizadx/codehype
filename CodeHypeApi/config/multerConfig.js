var multer = require('multer');
var path = require('path');

//multer.diskStorage() creates a storage space for storing files. 
var storage = multer.diskStorage({
destination:function(req, file,cb){
if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
cb(null, './uploads');
}else{
cb({message: 'this file is neither a video or image file'}, false)
}
},
filename: function(req, file, cb){
cb(null, file.originalname);
}
})
var upload = multer({storage:storage});
module.exports = upload;