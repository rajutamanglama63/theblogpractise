import {
    CREATE_POLITICS,
    DELETE_POLITICS,
    UPDATE_POLITICS,
    GET_POLITICS,
    GET_ALL_POLITICS
} from '../constants/actionTypes';
import axios from 'axios';


// CREATE BLOG AUTHORIZEDLY
export const createPolBlog = (newBlog) => async (dispatch) => {
    try {
        const blog = await axios.post('/blog/pol/create', newBlog);

        dispatch({
            type : CREATE_POLITICS,
            blog : blog
        })
    } catch (error) {
        console.log(error);
    }
};

// GET BLOGS AUTHORIZEDLY
export const getPolBlogs = () => async (dispatch) => {
    try {
        const blogs = await axios.get('/blog/pol/getblogs');

        dispatch({
            type : GET_POLITICS,
            blogs : blogs
        });
    } catch (error) {
        console.log(error);
    }
};

// GET ALL BLOGS
export const allPolBlogs = () => async (dispatch) => {
    try {
        const allBlogs = await axios.get('/blog/pol/allblogs');

        dispatch({
            type : GET_ALL_POLITICS,
            allBlogs : allBlogs
        })
    } catch (error) {
        console.log(error);
    }
};

// UPDATE BLOG AUTHORIZEDLY
export const updatePolBlog = (id, blogData) => async (dispatch) => {
    try {
        const {data} = await axios.patch(`blog/pol/update/${id}`, blogData);

        dispatch({
            type : UPDATE_POLITICS,
            data : data
        });
    } catch (error) {
        console.log(error);
    }
};

// DELETE BLOG AUTHORIZEDLY
export const deletedPolBlog = (id) => async (dispatch) => {
    try {
        await axios.delete(`/blog/pol/delete/${id}`);

        dispatch({
            type : DELETE_POLITICS,
            id
        });
    } catch (error) {
        console.log(error);
    }
};