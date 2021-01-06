import {GET_TASKS, GET_TASK, UPDATE_TASK, EDIT_TASK, DELETE_TASK, TASK_ERROR} from './types';
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

export const getTaskData = (id, title, urgent, completed) => dispatch => {
   const data = {
       id: id, 
       title: title, 
       urgent: urgent, 
       completed: completed
    }
    dispatch({
        type: EDIT_TASK,
        payload: data
    })
}

export const newTask = (title, urgent, completed) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json '
        }
    }
    const body = JSON.stringify({title, urgent, completed})
   try {
       const res = await axios.post('/api/tasks', body, config);
       dispatch({
           type: UPDATE_TASK,
           payload: res.data
       });
       dispatch(getTasks());
   }
   catch(err){
    dispatch({
        type: TASK_ERROR,
        payload: {message: err.response.statusText, status: err.response.status}
    });
   }
}

export const editTask = (id) => dispatch => {
    return true;
}

export const deleteTask = (id) => dispatch => {
  return dispatch({type: DELETE_TASK, payload: id});
}

