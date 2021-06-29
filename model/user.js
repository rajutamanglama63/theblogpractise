const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    firstname : {
        type : String
    },
    lastname : {
        type : String
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    address : {
        type : String
    },
    phone : {
        type : String
    },
    occupation : {
        type : String
    },
    age : {
        type : String
    },
    sex : {
        type : String
    }
});

const User = mongoose.model('user', userSchema);

module.exports = User;