const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
    },
    blogDescription : {
        type : String,
        required : true
    },
    uid : {
        type : String,
    },
    picture : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : new Date()
    },
});

const Education = mongoose.model("edu", educationSchema);

module.exports = Education;