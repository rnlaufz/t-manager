import axios from 'axios';

import {setAlert} from "./alert";

import {REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, CHANGE_USER_DATA, DELETE_USER} from './types';

import setAuthToken from '../utils/setAuthToken'

// Load user 
export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token);
    }

    try {
        const res = await axios.get('/api/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        })
    }
}

// Register User
export const register = ({name, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json '
        }
    }

    const body = JSON.stringify({name, email, password});

    try {
        const res = await axios.post('/api/users', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        });
        dispatch(loadUser());
    } catch (err) {

        const errors = err.response.data.errors;
        
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
        }

        dispatch({
            type: REGISTER_FAIL
        });
    }
};

// Login User
export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json '
        }
    }

    const body = JSON.stringify({email, password});

    try {
        const res = await axios.post('/api/auth', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(loadUser());
    } catch (err) {

        const errors = err.response.data.errors;
        
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.message, "danger")));
        }

        dispatch({
            type: LOGIN_FAIL
        });
    }
};

// Change user email or password 
export const updateUserData = (body) => async dispatch => {
    try {
        const res = await axios.post('/api/users/update', body);
        dispatch({
            type: CHANGE_USER_DATA,
            payload: res.data
        });
    } catch (err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.message, "danger")));
        }

    }
};

export const deleteUser = () =>async  dispatch => {
    try {
        const res = await axios.delete('/api/users');
        dispatch({
            type: DELETE_USER,
            payload: res.data
        })
        
    } catch (err) {
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.message, "danger")));
        }
    }
}

// Logout 
export const logout = () => dispatch => {
    dispatch({type: LOGOUT});
}