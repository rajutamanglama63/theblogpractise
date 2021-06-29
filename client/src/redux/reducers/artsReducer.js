import {
    CREATE_ARTS,
    DELETE_ARTS,
    UPDATE_ARTS,
    GET_ARTS,
    GET_ARTS_DETAIL,
    GET_ALL_ARTS
} from '../constants/actionTypes';

export const artReducers = (arts=[], action) => {
    switch(action.type) {
        case CREATE_ARTS:
            return [...arts, action.blog.data];
        case GET_ARTS:
            return action.blogs.data;
        case GET_ARTS_DETAIL:
            return action.DetailedBlog;
        case GET_ALL_ARTS:
            return action.allBlogs.data;
        case DELETE_ARTS:
            return arts.filter((art) => art._id !== action.id);
        case UPDATE_ARTS:
            return arts.map((art) => art._id === action.data._id ? action.data : art); 
        default:
            return arts;
    }
}