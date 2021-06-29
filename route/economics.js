const express = require("express");
const Economics = require("../model/economics");

const router = express();

// GET AUTHENTICATED BLOGS
router.get('/getblogs', async (req, res) => {
    try {
        const blog = await Economics.find({});

        res.status(200).json(blog);
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message);
    }
});

// GET AUTHENTICATED BLOGS DETAILLY
router.get('/:id', async (req, res) => {
    try {
        const blog = await Economics.findById(req.params.id);

        res.status(200).json(blog);
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message);
    }
});

// GET ALL BLOGS
router.get('/allblogs', async (req, res) => {
    try {
        const allBlogs = await Economics.find({});

        res.status(200).json(allBlogs);
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message);
    }
});

// CREATE BLOG
router.post('/create', async (req, res) => {
    try {
        const {title, blogDescription, author, uid, picture} = req.body;

        const newBlog = new Economics({
            title,
            blogDescription,
            author,
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

        const updated = await Economics.findByIdAndUpdate(id, toBeUpdated, {new : true});
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
        const deletedBlog = await Economics.findByIdAndDelete(id);

        res.status(200).json(deletedBlog);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
});


module.exports = router;

