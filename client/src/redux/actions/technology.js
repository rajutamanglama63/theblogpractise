import {
    CREATE_TECHNOLOGY,
    DELETE_TECHNOLOGY,
    UPDATE_TECHNOLOGY,
    GET_TECHNOLOGY,
    GET_ALL_TECHNOLOGY
} from '../constants/actionTypes';
import axios from 'axios';


// CREATE BLOG AUTHORIZEDLY
export const createTechBlog = (newBlog) => async (dispatch) => {
    try {
        const blog = await axios.post('/blog/tech/create', newBlog);

        dispatch({
            type : CREATE_TECHNOLOGY,
            blog : blog
        })
    } catch (error) {
        console.log(error);
    }
};

// GET BLOGS AUTHORIZEDLY
export const getTechBlogs = () => async (dispatch) => {
    try {
        const blogs = await axios.get('/blog/tech/getblogs');

        dispatch({
            type : GET_TECHNOLOGY,
            blogs : blogs
        });
    } catch (error) {
        console.log(error);
    }
};

// GET ALL BLOGS
export const allTechBlogs = () => async (dispatch) => {
    try {
        const allBlogs = await axios.get('/blog/tech/allblogs');

        dispatch({
            type : GET_ALL_TECHNOLOGY,
            allBlogs : allBlogs
        })
    } catch (error) {
        console.log(error);
    }
};

// UPDATE BLOG AUTHORIZEDLY
export const updateTechBlog = (id, blogData) => async (dispatch) => {
    try {
        const {data} = await axios.patch(`blog/tech/update/${id}`, blogData);

        dispatch({
            type : UPDATE_TECHNOLOGY,
            data : data
        });
    } catch (error) {
        console.log(error);
    }
};

// DELETE BLOG AUTHORIZEDLY
export const deletedTechBlog = (id) => async (dispatch) => {
    try {
        await axios.delete(`/blog/tech/delete/${id}`);

        dispatch({
            type : DELETE_TECHNOLOGY,
            id
        });
    } catch (error) {
        console.log(error);
    }
};