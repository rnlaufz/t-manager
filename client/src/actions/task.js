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

export const getTaskData = (id) => async dispatch => {
     try{
         const res = await axios.get(`/api/tasks/${id}`)
         dispatch({
            type: GET_TASK,
            payload: res.data
        })
     }
     catch(err){
         dispatch({
             type: TASK_ERROR,
             payload: {message: err.response.statusText, status: err.response.status}
         })
     }
 }

//  id here works as a callback -> holds execution untill date sent to action
export const editTask = (id, taskData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json '
        }
    }
    const sendID = taskData._id;
    const body = JSON.stringify(taskData)

    try{
        const res = await axios.put(`/api/tasks/${sendID}`, body, config)
        dispatch({
           type: UPDATE_TASK,
           payload: res.data
       })
    }
    catch(err){
        dispatch({
            type: TASK_ERROR,
            payload: {message: err.response.statusText, status: err.response.status}
        })
    }
}

// Each task component sends id of the task as a part of the url | function sends the url with id to the server 
export const deleteTask = (id) => async dispatch => {
    try{
        const res = await axios.delete(`/api/tasks/${id}`)
        dispatch({
            type: DELETE_TASK
        });
    }
    catch(err){
        dispatch({
            type: TASK_ERROR,
            payload: {message: err.response.statusText, status: err.response.status}
        })
    }
  
}

