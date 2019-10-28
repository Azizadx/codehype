const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create Topic Schema

const TopicSchema  = new Schema({
    name: {
        type: String,
        required:true
    },
    category:{
        type: String,
        required: true
    },
    description:{
        type:String,
        required:true
    }, 
    imageUrl:{
        type:String,
    },
    imageId:{
        type:String
    },
}, {
    timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
});

module.exports = mongoose.model('topic',TopicSchema);