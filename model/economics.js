const mongoose = require("mongoose");

const economicsSchema = new mongoose.Schema({
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
        type : Number,
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

const Economics = mongoose.model("eco", economicsSchema);

module.exports = Economics;