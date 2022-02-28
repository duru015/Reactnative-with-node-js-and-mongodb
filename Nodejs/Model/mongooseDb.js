const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LoginSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    }
},{timestamps:true});
const User = mongoose.model("User",LoginSchema);
module.exports = User;