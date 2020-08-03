const mongoose = require('mongoose')

const { Schema} = mongoose;

userSchema = new Schema({
is_active:{
    type:Boolean,
    default:true
},
first_name:{
    type:String,
    default:true
},
last_name:{
    type:String,
    default:true
},
email:{
    type:String,
    default:true
},
password:{
    type:String,
    default:true
}


});

const User = mongoose.model('User', userSchema);

module.exports = User;

