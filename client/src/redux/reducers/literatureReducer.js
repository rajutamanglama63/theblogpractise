import {
    CREATE_LITERATURE,
    DELETE_LITERATURE,
    UPDATE_LITERATURE,
    GET_LITERATURE,
    GET_ALL_LITERATURE
} from '../constants/actionTypes';

export const literatureReducers = (literatures=[], action) => {
    switch(action.type) {
        case CREATE_LITERATURE:
            return [...literatures, action.blog.data];
        case GET_LITERATURE:
            return action.blogs.data;
        case GET_ALL_LITERATURE:
            return action.allBlogs.data;
        case DELETE_LITERATURE:
            return literatures.filter((lit) => lit._id !== action.id);
        case UPDATE_LITERATURE:
            return literatures.map((lit) => lit._id === action.data._id ? action.data : lit); 
        default:
            return literatures;
    }
}