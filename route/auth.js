const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const User = require("../model/user");

const router = express.Router();

// SIGN UP
router.post('/signup', async (req, res) => {
    const {
        username,
        email,
        password,
        address,
        phone,
        age,
        sex,
        firstname,
        lastname,
        occupation
    } = req.body;

    if(!username || !email || !password) {
        return res.status(400).json("All fields are required.");
    }

    try {
        let newUser = await User.findOne({email : email});
        if(newUser) {
            return res.status(400).json({msg : "user already exist."});
        }

        const salt = await bcrypt.genSalt(10);
        const hassedPassword = await bcrypt.hash(password, salt);

        newUser = new User({
            username,
            email,
            password : hassedPassword,
            address,
            phone,
            age,
            sex,
            firstname,
            lastname,
            occupation
        });

        await newUser.save();

        const token = await jwt.sign({_id : newUser._id, username : newUser.username, email : newUser.email}, process.env.JWT_SECRET, {expiresIn : 3600});

        res.status(200).send(token);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
});

// SIGN IN
router.post('/signin', async (req, res) => {
    const { password, email} = req.body;

    if(!email || !password) {
        return res.status(400).json("All fields are required.");
    }

    try {
        let user = await User.findOne({email : email});
        if(!user) {
            return res.status(400).json({msg : "user doesnot exist."});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json("Invalid credentials");
        }

        const token = await jwt.sign({_id : user._id, username : user.username, email : user.email}, process.env.JWT_SECRET, {expiresIn : 3600});

        res.status(200).send(token);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
});

module.exports = router;