const express = require("express");
const Education = require("../model/education");

const router = express();

// GET AUTHENTICATED EDUCATION BLOGS
router.get('/edu/getblogs', async (req, res) => {
    try {
        const edu = await Education.find();

        res.status(200).json(edu);
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message);
    }
});

// GET ALL EDU BLOGS
router.get('/edu/allblogs', async (req, res) => {
    try {
        const allEdu = await Education.find();

        res.status(200).json(allEdu);
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message);
    }
});

// CREATE BLOG
router.post('/edu/create', async (req, res) => {
    try {
        const {title, blogDescription, author, uid, picture} = req.body;

        const newBlog = new Education({
            title,
            blogDescription,
            author,
            catagory,
            uid,
            picture
        });

        await newBlog.save();

        res.status(200).json(newBlog);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
});



// UPDATE BLOG
router.patch('/edu/update/:id', async (req, res) => {
    const {id} = req.params;
    const {title, blogDescription, uid, author, picture} = req.body;
    try {
        const toBeUpdated = {title, blogDescription, uid, author, picture};

        const updated = await Education.findByIdAndUpdate(id, toBeUpdated, {new : true});
        res.status(200).json(updated);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
});

// DELETE BLOG
router.delete('/edu/delete/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const deletedBlog = await Education.findByIdAndDelete(id);

        res.status(200).json(deletedBlog);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
});


module.exports = router;

