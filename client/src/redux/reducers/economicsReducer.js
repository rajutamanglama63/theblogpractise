import {
    CREATE_ECONOMICS,
    DELETE_ECONOMICS,
    UPDATE_ECONOMICS,
    GET_ECONOMICS,
    GET_ECO_DETAIL,
    GET_ALL_ECONOMICS
} from '../constants/actionTypes';

export const economicReducers = (economics=[], action) => {
    switch(action.type) {
        case CREATE_ECONOMICS:
            return [...economics, action.blog.data];
        case GET_ECONOMICS:
            return action.blogs.data;
        case GET_ECO_DETAIL:
            return action.DetailedBlog;
        case GET_ALL_ECONOMICS:
            return action.allBlogs.data;
        case DELETE_ECONOMICS:
            return economics.filter((eco) => eco._id !== action.id);
        case UPDATE_ECONOMICS:
            return economics.map((eco) => eco._id === action.data._id ? action.data : eco); 
        default:
            return economics;
    }
}