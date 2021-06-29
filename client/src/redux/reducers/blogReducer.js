import {
    CREATE_BLOG,
    DELETE_BLOG,
    UPDATE_BLOG,
    GET_BLOGS,
    GET_ALL_BLOGS
} from '../constants/actionTypes';

export const blogReducers = (blogs=[], action) => {
    switch(action.type) {
        case CREATE_BLOG:
            return [...blogs, action.blog.data];
        case GET_BLOGS:
            return action.blogs.data;
        case GET_ALL_BLOGS:
            return action.allBlogs.data;
        case DELETE_BLOG:
            return blogs.filter((blog) => blog._id !== action.id);
        case UPDATE_BLOG:
            return blogs.map((blog) => blog._id === action.data._id ? action.data : blog); 
        default:
            return blogs;
    }
}