const mongoose = require("mongoose");

const artSchema = new mongoose.Schema({
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

const Arts = mongoose.model("art", artSchema);

module.exports = Arts;