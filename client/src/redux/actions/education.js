import {
    CREATE_EDUCATION,
    DELETE_EDUCATION,
    UPDATE_EDUCATION,
    GET_EDUCATION,
    GET_ALL_EDUCATION
} from '../constants/actionTypes';
import axios from 'axios';


// CREATE BLOG AUTHORIZEDLY
export const createEduBlog = (newBlog) => async (dispatch) => {
    try {
        const blog = await axios.post('/blog/edu/create', newBlog);

        dispatch({
            type : CREATE_EDUCATION,
            blog : blog
        })
    } catch (error) {
        console.log(error);
    }
};

// GET BLOGS AUTHORIZEDLY
export const getEduBlogs = () => async (dispatch) => {
    try {
        const blogs = await axios.get('/blog/edu/getblogs');

        dispatch({
            type : GET_EDUCATION,
            blogs : blogs
        });
    } catch (error) {
        console.log(error);
    }
};

// GET ALL BLOGS
export const allEduBlogs = () => async (dispatch) => {
    try {
        const allBlogs = await axios.get('/blog/edu/allblogs');

        dispatch({
            type : GET_ALL_EDUCATION,
            allBlogs : allBlogs
        })
    } catch (error) {
        console.log(error);
    }
};

// UPDATE BLOG AUTHORIZEDLY
export const updateEduBlog = (id, blogData) => async (dispatch) => {
    try {
        const {data} = await axios.patch(`blog/edu/update/${id}`, blogData);

        dispatch({
            type : UPDATE_EDUCATION,
            data : data
        });
    } catch (error) {
        console.log(error);
    }
};

// DELETE BLOG AUTHORIZEDLY
export const deletedEduBlog = (id) => async (dispatch) => {
    try {
        await axios.delete(`/blog/edu/delete/${id}`);

        dispatch({
            type : DELETE_EDUCATION,
            id
        });
    } catch (error) {
        console.log(error);
    }
};