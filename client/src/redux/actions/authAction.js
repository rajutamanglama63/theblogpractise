import {
    SIGN_IN,
    SIGN_OUT,
    SIGN_UP,
    USER_LOADED,
    USER_LOADING_FAIL
} from '../constants/actionTypes';
import axios from 'axios';

export const signup = (admin) => async (dispatch) => {
    try {
        const token = await axios.post('/auth/signup', admin);
        if(token) {
            localStorage.setItem("token", token.data);
        }

        dispatch({
            type : SIGN_UP,
            token : token.data
        });

    } catch (error) {
        console.log(error);
    }
};

export const signin = (email, password) => async (dispatch) => {
    try {
        const token = await axios.post('/auth/signin', {email, password});
        if(token) {
            localStorage.setItem("token", token.data);
        }

        dispatch({
            type : SIGN_IN,
            token : token.data
        });
    } catch (error) {
        console.log(error);
    }
};

export const signout = () => async (dispatch) => {
    dispatch({
        type : SIGN_OUT
    });
};
