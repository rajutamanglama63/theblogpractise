const mongoose = require("mongoose");

const literatureSchema = new mongoose.Schema({
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

const Literature = mongoose.model("lit", literatureSchema);

module.exports = Literature;