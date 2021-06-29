const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const auth = async (req, res, next) => {
    const token = req.header("x-auth-token");
    try {
        // verify the token which is gained from header and save in variable
        const verifiedDecodedData = await jwt.verify(token, process.env.JWT_SECRET);

        // add user from verified or decoded data from payload
        req.user = verifiedDecodedData;

        next();
        
    } catch (error) {
        res.status(400).json({msg : "Token validation failed."});
    }
}

module.exports = auth;