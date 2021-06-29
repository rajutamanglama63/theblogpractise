import {
    CREATE_EDUCATION,
    DELETE_EDUCATION,
    UPDATE_EDUCATION,
    GET_EDUCATION,
    GET_ALL_EDUCATION
} from '../constants/actionTypes';

export const educationReducers = (educations=[], action) => {
    switch(action.type) {
        case CREATE_EDUCATION:
            return [...educations, action.blog.data];
        case GET_EDUCATION:
            return action.blogs.data;
        case GET_ALL_EDUCATION:
            return action.allBlogs.data;
        case DELETE_EDUCATION:
            return educations.filter((edu) => edu._id !== action.id);
        case UPDATE_EDUCATION:
            return educations.map((edu) => edu._id === action.data._id ? action.data : edu); 
        default:
            return educations;
    }
}