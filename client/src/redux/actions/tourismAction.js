import {
    CREATE_TOURISM,
    DELETE_TOURISM,
    UPDATE_TOURISM,
    GET_TOURISM,
    GET_ALL_TOURISM
} from '../constants/actionTypes';
import axios from 'axios';


// CREATE BLOG AUTHORIZEDLY
export const createTourBlog = (newBlog) => async (dispatch) => {
    try {
        const blog = await axios.post('/blog/tour/create', newBlog);

        dispatch({
            type : CREATE_TOURISM,
            blog : blog
        })
    } catch (error) {
        console.log(error);
    }
};

// GET BLOGS AUTHORIZEDLY
export const getTourBlogs = () => async (dispatch) => {
    try {
        const blogs = await axios.get('/blog/tour/getblogs');

        dispatch({
            type : GET_TOURISM,
            blogs : blogs
        });
    } catch (error) {
        console.log(error);
    }
};

// GET ALL BLOGS
export const allTourBlogs = () => async (dispatch) => {
    try {
        const allBlogs = await axios.get('/blog/tour/allblogs');

        dispatch({
            type : GET_ALL_TOURISM,
            allBlogs : allBlogs
        })
    } catch (error) {
        console.log(error);
    }
};

// UPDATE BLOG AUTHORIZEDLY
export const updateTourBlog = (id, blogData) => async (dispatch) => {
    try {
        const {data} = await axios.patch(`blog/tour/update/${id}`, blogData);

        dispatch({
            type : UPDATE_TOURISM,
            data : data
        });
    } catch (error) {
        console.log(error);
    }
};

// DELETE BLOG AUTHORIZEDLY
export const deletedTourBlog = (id) => async (dispatch) => {
    try {
        await axios.delete(`/blog/tour/delete/${id}`);

        dispatch({
            type : DELETE_TOURISM,
            id
        });
    } catch (error) {
        console.log(error);
    }
};