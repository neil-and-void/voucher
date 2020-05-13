//=====================  Users.js  ======================

const mongoose = require('mongoose');

// User schema
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    firstname: {
        type: String,
        required:true
    },
    lastname: {
        type: String,
        required:true
    },
});

const User = module.exports = mongoose.model('User', UserSchema);