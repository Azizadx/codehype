const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create user Schema 
const ProfileSchema = new Schema({
    userId:
    {
        type: Schema.Types.ObjectId, 
        ref: 'User', 
    },

    imageUrl: {type:String, default:'https://res.cloudinary.com/codehypeimages/image/upload/v1571529645/usersImages/oaimvcz2gzab2qslg1nu.png'},
        imageId: {type:String,default: 'oaimvcz2gzab2qslg1nu'},
        likes:{type:Number,default:0},
        disLikes:{type:Number,default:0},
    shares:{
        type:Number,
        default:0
    }},
    {
        timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
    });

module.exports  = mongoose.model('Profile',ProfileSchema);
