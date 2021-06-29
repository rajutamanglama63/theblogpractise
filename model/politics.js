const mongoose = require("mongoose");

const politicsSchema = new mongoose.Schema({
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

const Politics = mongoose.model("politic", politicsSchema);

module.exports = Politics;