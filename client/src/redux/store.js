import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {authReducer} from './reducers/authReducer'
import {blogReducers} from './reducers/blogReducer'
import {artReducers} from './reducers/artsReducer'
import {economicReducers} from './reducers/economicsReducer'
import {educationReducers} from './reducers/educationReducer'
import {literatureReducers} from './reducers/literatureReducer'
import {politicsReducers} from './reducers/politicsReducer'
import {technologyReducers} from './reducers/technologyReducer'
import {tourismReducers} from './reducers/tourismReducer'

const middleware = [thunk];

const reducers = combineReducers({
    auth : authReducer,
    blog : blogReducers,
    art : artReducers,
    economic : economicReducers,
    education : educationReducers,
    literature : literatureReducers,
    politics : politicsReducers,
    technology : technologyReducers,
    tourism : tourismReducers
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;