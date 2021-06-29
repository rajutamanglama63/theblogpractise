import {
    CREATE_TECHNOLOGY,
    DELETE_TECHNOLOGY,
    UPDATE_TECHNOLOGY,
    GET_TECHNOLOGY,
    GET_ALL_TECHNOLOGY
} from '../constants/actionTypes';

export const technologyReducers = (technologies=[], action) => {
    switch(action.type) {
        case CREATE_TECHNOLOGY:
            return [...technologies, action.blog.data];
        case GET_TECHNOLOGY:
            return action.blogs.data;
        case GET_ALL_TECHNOLOGY:
            return action.allBlogs.data;
        case DELETE_TECHNOLOGY:
            return technologies.filter((tech) => tech._id !== action.id);
        case UPDATE_TECHNOLOGY:
            return technologies.map((tech) => tech._id === action.data._id ? action.data : tech); 
        default:
            return technologies;
    }
}