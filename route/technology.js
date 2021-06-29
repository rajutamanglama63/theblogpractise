const express = require("express");
const Technology = require("../model/technology");

const router = express();

// GET AUTHENTICATED BLOGS
router.get('/tech/getblogs', async (req, res) => {
    try {
        const blog = await Technology.find();

        res.status(200).json(blog);
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message);
    }
});

// GET ALL BLOGS
router.get('/tech/allblogs', async (req, res) => {
    try {
        const allBlogs = await Technology.find();

        res.status(200).json(allBlogs);
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message);
    }
});

// CREATE BLOG
router.post('/tech/create', async (req, res) => {
    try {
        const {title, blogDescription, author, uid, picture} = req.body;

        const newBlog = new Technology({
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
router.patch('/tech/update/:id', async (req, res) => {
    const {id} = req.params;
    const {title, blogDescription, uid, author, picture} = req.body;
    try {
        const toBeUpdated = {title, blogDescription, uid, author, picture};

        const updated = await Technology.findByIdAndUpdate(id, toBeUpdated, {new : true});
        res.status(200).json(updated);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
});

// DELETE BLOG
router.delete('/tech/delete/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const deletedBlog = await Technology.findByIdAndDelete(id);

        res.status(200).json(deletedBlog);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
});


module.exports = router;

