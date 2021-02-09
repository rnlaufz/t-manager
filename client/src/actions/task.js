import {GET_TASKS, GET_TASK, UPDATE_TASK, GET_COMPTASKS, DELETE_TASK, DELETE_USER_DATA, TASK_ERROR} from './types';
import axios from "axios";



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
export const getCompleted = () => async dispatch => {
    try {
        const res = await axios.get('/api/tasks/completed');
        dispatch({
            type: GET_COMPTASKS,
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

//  Edit task
export const editTask = (taskData) => async dispatch => {
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json '
    //     }
    // }
    try{
        const res = await axios.post(`/api/tasks/update`, taskData)
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
export const completeTask = (_id) => async dispatch => {
    
    try{
        const res = await axios.post(`/api/tasks/${_id}`,)
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
            type: DELETE_TASK,
            payload: res.data
        });
    }
    catch(err){
        dispatch({
            type: TASK_ERROR,
            payload: {message: err.response.statusText, status: err.response.status}
        })
    }
  
}
export const resetTasks = () => async dispatch => {
    try{
        const res = await axios.delete(`/api/tasks/`)
        dispatch({
            type: DELETE_USER_DATA,
            payload: res.data
        });
    }
    catch(err){
        dispatch({
            type: TASK_ERROR,
            payload: {message: err.response.statusText, status: err.response.status}
        })
    }
  
}

