const cloudinary = require('cloudinary');
cloudinary.config({
CLOUDINARY_URL: process.env.CLOUDINARY_URL,
});

exports.uploads = (file,folderpass) =>{
    return new Promise(resolve => {
    cloudinary.v2.uploader.upload(file,{folder:folderpass}) .then(
        (result) =>{
            resolve({url: result.url, id: result.public_id})
           }
    ), {resource_type: "auto"}
  })
}