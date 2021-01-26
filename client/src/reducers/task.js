import {GET_TASKS, GET_TASK, GET_COMPTASKS, UPDATE_TASK, DELETE_TASK, TASK_ERROR} from '../actions/types';

const initialState = {
    tasks: [],
    task: null,
    loading: true,
    noCompletes: true,
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
        case GET_TASK:
                return {
                    ...state,
                    task: payload,
                    loading: false
                };   
        case GET_COMPTASKS: 
            return {
                ...state,
                tasks: payload,
                loading: false,
                noCompletes: payload.length === 0 ? true : false
            }          
        case UPDATE_TASK:
            return {
                ...state,
                task: payload,
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