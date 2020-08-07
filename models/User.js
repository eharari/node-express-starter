const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10;

const { Schema} = mongoose;



const userSchema = new Schema({
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
},
},
{
timestamps: true,
    versionkey: false,
}

);

userSchema.pre('save', function(next) {
    const user = this;
// only hash the password if it has been modified (or is new)
if (!user.isModified('password')) return next();
// generate a salt
bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);
    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        // override the cleartext password with the hashed one
        user.password = hash;
        next();
    });
});
});

const User = mongoose.model('User', userSchema);


module.exports = User;

