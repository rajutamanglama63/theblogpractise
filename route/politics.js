const express = require("express");
const Politics = require("../model/politics");

const router = express();

// GET AUTHENTICATED BLOGS
router.get('/pol/getblogs', async (req, res) => {
    try {
        const blog = await Politics.find();

        res.status(200).json(blog);
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message);
    }
});

// GET ALL BLOGS
router.get('/pol/allblogs', async (req, res) => {
    try {
        const allBlogs = await Politics.find();

        res.status(200).json(allBlogs);
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message);
    }
});

// CREATE BLOG
router.post('/pol/create', async (req, res) => {
    try {
        const {title, blogDescription, author, uid, picture} = req.body;

        const newBlog = new Politics({
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
router.patch('/pol/update/:id', async (req, res) => {
    const {id} = req.params;
    const {title, blogDescription, uid, author, picture} = req.body;
    try {
        const toBeUpdated = {title, blogDescription, uid, author, picture};

        const updated = await Politics.findByIdAndUpdate(id, toBeUpdated, {new : true});
        res.status(200).json(updated);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
});

// DELETE BLOG
router.delete('/pol/delete/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const deletedBlog = await Politics.findByIdAndDelete(id);

        res.status(200).json(deletedBlog);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
});


module.exports = router;

