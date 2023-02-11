const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema ({
    name :{
        type : String,
        required : true,
        trim  : true
    },
    telephone : {
        type : String,
        required : true,
        trim  : true
    },
    email : {
        type : String,
        required : true,
        trim  : true
    },
    topic : {
        type : String,
        required : true,
        trim  : true
    },
    description: {
        type : String,
        required : true,
        trim  : true
    }
})
module.exports = mongoose.model('Post', postSchema);