import {
    CREATE_LITERATURE,
    DELETE_LITERATURE,
    UPDATE_LITERATURE,
    GET_LITERATURE,
    GET_ALL_LITERATURE
} from '../constants/actionTypes';
import axios from 'axios';


// CREATE BLOG AUTHORIZEDLY
export const createLitBlog = (newBlog) => async (dispatch) => {
    try {
        const blog = await axios.post('/blog/lit/create', newBlog);

        dispatch({
            type : CREATE_LITERATURE,
            blog : blog
        })
    } catch (error) {
        console.log(error);
    }
};

// GET BLOGS AUTHORIZEDLY
export const getLitBlogs = () => async (dispatch) => {
    try {
        const blogs = await axios.get('/blog/lit/getblogs');

        dispatch({
            type : GET_LITERATURE,
            blogs : blogs
        });
    } catch (error) {
        console.log(error);
    }
};

// GET ALL BLOGS
export const allLitBlogs = () => async (dispatch) => {
    try {
        const allBlogs = await axios.get('/blog/lit/allblogs');

        dispatch({
            type : GET_ALL_LITERATURE,
            allBlogs : allBlogs
        })
    } catch (error) {
        console.log(error);
    }
};

// UPDATE BLOG AUTHORIZEDLY
export const updateLitBlog = (id, blogData) => async (dispatch) => {
    try {
        const {data} = await axios.patch(`blog/lit/update/${id}`, blogData);

        dispatch({
            type : UPDATE_LITERATURE,
            data : data
        });
    } catch (error) {
        console.log(error);
    }
};

// DELETE BLOG AUTHORIZEDLY
export const deletedLitBlog = (id) => async (dispatch) => {
    try {
        await axios.delete(`/blog/lit/delete/${id}`);

        dispatch({
            type : DELETE_LITERATURE,
            id
        });
    } catch (error) {
        console.log(error);
    }
};