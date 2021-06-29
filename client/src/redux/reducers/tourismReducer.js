import {
    CREATE_TOURISM,
    DELETE_TOURISM,
    UPDATE_TOURISM,
    GET_TOURISM,
    GET_ALL_TOURISM
} from '../constants/actionTypes';

export const tourismReducers = (tourisms=[], action) => {
    switch(action.type) {
        case CREATE_TOURISM:
            return [...tourisms, action.blog.data];
        case GET_TOURISM:
            return action.blogs.data;
        case GET_ALL_TOURISM:
            return action.allBlogs.data;
        case DELETE_TOURISM:
            return tourisms.filter((tour) => tour._id !== action.id);
        case UPDATE_TOURISM:
            return tourisms.map((tour) => tour._id === action.data._id ? action.data : tour); 
        default:
            return tourisms;
    }
}