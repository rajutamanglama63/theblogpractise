import {
    CREATE_BLOG,
    DELETE_BLOG,
    UPDATE_BLOG,
    GET_BLOGS,
    GET_ALL_BLOGS
} from '../constants/actionTypes';
import axios from 'axios';


// CREATE BLOG AUTHORIZEDLY
export const createBlog = (newBlog) => async (dispatch) => {
    try {
        const blog = await axios.post('/blog/create', newBlog);

        dispatch({
            type : CREATE_BLOG,
            blog : blog
        })
    } catch (error) {
        console.log(error);
    }
};

// GET BLOGS AUTHORIZEDLY
export const getBlogs = () => async (dispatch) => {
    try {
        const blogs = await axios.get('/blog/getblogs');

        dispatch({
            type : GET_BLOGS,
            blogs : blogs
        });
    } catch (error) {
        console.log(error);
    }
};

// GET ALL BLOGS
export const allBlogs = () => async (dispatch) => {
    try {
        const allBlogs = await axios.get('/blog/allblogs');

        dispatch({
            type : GET_ALL_BLOGS,
            allBlogs : allBlogs
        })
    } catch (error) {
        console.log(error);
    }
};

// UPDATE BLOG AUTHORIZEDLY
export const updateBlog = (id, blogData) => async (dispatch) => {
    try {
        const {data} = await axios.patch(`blog/update/${id}`, blogData);

        dispatch({
            type : UPDATE_BLOG,
            data : data
        });
    } catch (error) {
        console.log(error);
    }
};

// DELETE BLOG AUTHORIZEDLY
export const deletedBlog = (id) => async (dispatch) => {
    try {
        await axios.delete(`/blog/delete/${id}`);

        dispatch({
            type : DELETE_BLOG,
            id
        });
    } catch (error) {
        console.log(error);
    }
};