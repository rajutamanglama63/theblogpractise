import {
    CREATE_POLITICS,
    DELETE_POLITICS,
    UPDATE_POLITICS,
    GET_POLITICS,
    GET_ALL_POLITICS
} from '../constants/actionTypes';

export const politicsReducers = (politics=[], action) => {
    switch(action.type) {
        case CREATE_POLITICS:
            return [...politics, action.blog.data];
        case GET_POLITICS:
            return action.blogs.data;
        case GET_ALL_POLITICS:
            return action.allBlogs.data;
        case DELETE_POLITICS:
            return politics.filter((pol) => pol._id !== action.id);
        case UPDATE_POLITICS:
            return politics.map((pol) => pol._id === action.data._id ? action.data : pol); 
        default:
            return politics;
    }
}