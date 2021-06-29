const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const connectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.mongoURI, {
            useCreateIndex : true,
            useFindAndModify : false,
            useNewUrlParser : true,
            useUnifiedTopology : true
        });
        console.log("MongoDB connection established.");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;