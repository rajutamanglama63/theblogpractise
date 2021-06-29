import {
    CREATE_ECONOMICS,
    DELETE_ECONOMICS,
    UPDATE_ECONOMICS,
    GET_ECONOMICS,
    GET_ECO_DETAIL,
    GET_ALL_ECONOMICS
} from '../constants/actionTypes';
import axios from 'axios';


// CREATE BLOG AUTHORIZEDLY
export const createEcoBlog = (newBlog) => async (dispatch) => {
    try {
        const blog = await axios.post('/eco/create', newBlog);

        dispatch({
            type : CREATE_ECONOMICS,
            blog : blog
        })
    } catch (error) {
        console.log(error);
    }
};

// GET BLOGS AUTHORIZEDLY
export const getEcoBlogs = () => async (dispatch) => {
    try {
        const blogs = await axios.get('/eco/getblogs');

        dispatch({
            type : GET_ECONOMICS,
            blogs : blogs
        });
    } catch (error) {
        console.log(error);
    }
};

// GET BLOGS DETAIL AUTHORIZEDLY
export const getEcoBlogsDetail = (id) => async (dispatch) => {
    try {
        const DetailedBlog = await axios.get(`/eco/${id}`);

        dispatch({
            type : GET_ECO_DETAIL,
            DetailedBlog : DetailedBlog
        });
    } catch (error) {
        console.log(error);
    }
};

// GET ALL BLOGS
export const allEcoBlogs = () => async (dispatch) => {
    try {
        const allBlogs = await axios.get('/eco/allblogs');

        dispatch({
            type : GET_ALL_ECONOMICS,
            allBlogs : allBlogs
        })
    } catch (error) {
        console.log(error);
    }
};

// UPDATE BLOG AUTHORIZEDLY
export const updateEcoBlog = (id, blogData) => async (dispatch) => {
    try {
        const {data} = await axios.patch(`/eco/update/${id}`, blogData);

        dispatch({
            type : UPDATE_ECONOMICS,
            data : data
        });
    } catch (error) {
        console.log(error);
    }
};

// DELETE BLOG AUTHORIZEDLY
export const deletedEcoBlog = (id) => async (dispatch) => {
    try {
        await axios.delete(`/blog/eco/delete/${id}`);

        dispatch({
            type : DELETE_ECONOMICS,
            id
        });
    } catch (error) {
        console.log(error);
    }
};