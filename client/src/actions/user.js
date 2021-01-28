import {DELETE_USER_DATA, CHANGE_USER_DATA, DELETE_USER} from './types';
import axios from 'axios';

export const changeData = () => async dispatch => {
    try {
        // Send new data to users collection
        const res = await axios.post('/api/userdata');
        dispatch({
            type: CHANGE_USER_DATA,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            // ERROR
        })
    }
}
export const deleteData = () => async dispatch => {
    try {
        // Delete all tasks 
        const res = await axios.delete('/api/userdata');
        dispatch({
            type: DELETE_USER_DATA,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            // ERROR
        })
    }
}
export const deleteUser = () => async dispatch => {
    try {
        // Send new data to users collection
        const res = await axios.delete('/api/user');
        dispatch({
            type: DELETE_USER,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            // ERROR
        })
    }
}