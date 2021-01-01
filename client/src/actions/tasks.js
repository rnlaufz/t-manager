import {GET_TASKS, NEW_TASK, EDIT_TASK, DELETE_TASK} from './types';

// @TO_DO create func for NEW, EDIT, GET && TEST DELETE
export const getTasks = () => dispatch => {
    return true;
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

