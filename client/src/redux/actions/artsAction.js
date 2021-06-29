import {
    CREATE_ARTS,
    DELETE_ARTS,
    UPDATE_ARTS,
    GET_ARTS,
    GET_ARTS_DETAIL,
    GET_ALL_ARTS
} from '../constants/actionTypes';
import axios from 'axios';


// CREATE BLOG AUTHORIZEDLY
export const createArtsBlog = (newBlog) => async (dispatch) => {
    try {
        const blog = await axios.post('/arts/create', newBlog);

        dispatch({
            type : CREATE_ARTS,
            blog : blog
        })
    } catch (error) {
        console.log(error);
    }
};

// GET BLOGS AUTHORIZEDLY
export const getArtsBlogs = () => async (dispatch) => {
    try {
        const blogs = await axios.get('/arts/getblogs');

        dispatch({
            type : GET_ARTS,
            blogs : blogs
        });
    } catch (error) {
        console.log(error);
    }
};

// GET BLOGS DETAIL AUTHORIZEDLY
export const getArtsBlogsDetail = (id) => async (dispatch) => {
    try {
        const DetailedBlog = await axios.get(`/arts/${id}`);

        dispatch({
            type : GET_ARTS_DETAIL,
            DetailedBlog : DetailedBlog
        });
    } catch (error) {
        console.log(error);
    }
};

// GET ALL BLOGS
export const allArtsBlogs = () => async (dispatch) => {
    try {
        const allBlogs = await axios.get('/arts/allblogs');

        dispatch({
            type : GET_ALL_ARTS,
            allBlogs : allBlogs
        })
    } catch (error) {
        console.log(error);
    }
};

// UPDATE BLOG AUTHORIZEDLY
export const updateArtsBlog = (id, blogData) => async (dispatch) => {
    try {
        const {data} = await axios.patch(`/arts/update/${id}`, blogData);

        dispatch({
            type : UPDATE_ARTS,
            data : data
        });
    } catch (error) {
        console.log(error);
    }
};

// DELETE BLOG AUTHORIZEDLY
export const deletedArtsBlog = (id) => async (dispatch) => {
    try {
        await axios.delete(`/arts/delete/${id}`);

        dispatch({
            type : DELETE_ARTS,
            id
        });
    } catch (error) {
        console.log(error);
    }
};