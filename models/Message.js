const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    message:{
        type:String,
        required:true
    },
    

});


// Model
const Message = mongoose.model('Message', MessageSchema);

module.exports =  Message;
 