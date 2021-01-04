import {GET_TASKS, NEW_TASK, EDIT_TASK, DELETE_TASK, TASK_ERROR} from './types';
import axios from "axios";

import {setAlert} from './alert'

// @TO_DO create func for NEW, EDIT, GET && TEST DELETE
export const getTasks = () => async dispatch => {
    try {
        const res = await axios.get('/api/tasks/me');
        dispatch({
            type: GET_TASKS,
            payload: res.data
        })
        
    } 
    catch(err) {
        dispatch({
            type: TASK_ERROR,
            payload: {message: err.response.statusText, status: err.response.status}
        });
    }
}

export const newTask = () => dispatch => {
    return true;
}

export const editTask = (id) => dispatch => {
    return true;
}

export const deleteTask = (id) => dispatch => {
  return dispatch({type: DELETE_TASK, payload: id});
}

