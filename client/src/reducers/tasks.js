import {GET_TASKS, GET_TASKDATA,UPDATE_TASK, EDIT_TASK, DELETE_TASK, TASK_ERROR} from '../actions/types';

const initialState = {
    tasks: [],
    taskToEdit: {},
    loading: true,
    error: {}
}

export default function(state = initialState, action){
    const {type, payload} = action

    // @TO_DO complete func for GET, EDIT, NEW
    switch(type){
        case GET_TASKS:
            return {
                ...state,
                tasks: payload,
                loading: false
            };   
        case UPDATE_TASK:
            return {
                ...state,
                tasks: payload,
                loading: false
            };
        case GET_TASKDATA:
            console.log(payload)
            return {
                ...state,
                taskToEdit: payload,
                loading: false
            };
        case DELETE_TASK:
            return {
                ...state
            }
        case TASK_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;            
    }
}