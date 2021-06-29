const express = require("express");
const Tourism = require("../model/tourism");

const router = express();

// GET AUTHENTICATED BLOGS
router.get('/tour/getblogs', async (req, res) => {
    try {
        const blog = await Tourism.find();

        res.status(200).json(blog);
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message);
    }
});

// GET ALL BLOGS
router.get('/tour/allblogs', async (req, res) => {
    try {
        const allBlogs = await Tourism.find();

        res.status(200).json(allBlogs);
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message);
    }
});

// CREATE BLOG
router.post('/tour/create', async (req, res) => {
    try {
        const {title, blogDescription, author, uid, picture} = req.body;

        const newBlog = new Tourism({
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
router.patch('/tour/update/:id', async (req, res) => {
    const {id} = req.params;
    const {title, blogDescription, uid, author, picture} = req.body;
    try {
        const toBeUpdated = {title, blogDescription, uid, author, picture};

        const updated = await Tourism.findByIdAndUpdate(id, toBeUpdated, {new : true});
        res.status(200).json(updated);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
});

// DELETE BLOG
router.delete('/tour/delete/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const deletedBlog = await Tourism.findByIdAndDelete(id);

        res.status(200).json(deletedBlog);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.message);
    }
});


module.exports = router;

