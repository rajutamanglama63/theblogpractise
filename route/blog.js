const express = require("express");
const Blog = require("../model/blog");

const router = express();

// GET AUTHENTICATED BLOGS
router.get('/getblogs', async (req, res) => {
    try {
        const blogs = await Blog.find();

        res.status(200).json(blogs);
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message);
    }
});

// GET ALL BLOGS
router.get('/allblogs', async (req, res) => {
    try {
        const allBlogs = await Blog.find();

        res.status(200).json(allBlogs);
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message);
    }
});

// CREATE BLOG
router.post('/create', async (req, res) => {
    try {
        const {title, blogDescription, author, catagory, uid, picture} = req.body;

        const newBlog = new Blog({
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
router.patch('/update/:id', async (req, res) => {
    const {id} = req.params;
    const {title, blogDescription, uid, author, picture} = req.body;
    try {
        const toBeUpdated = {title, blogDescription, uid, author, picture};

        const updated = await Blog.findByIdAndUpdate(id, toBeUpdated, {new : true});
        res.status(200).json(updated);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
});

// DELETE BLOG
router.delete('/delete/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const deletedBlog = await Blog.findByIdAndDelete(id);

        res.status(200).json(deletedBlog);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
});


module.exports = router;

