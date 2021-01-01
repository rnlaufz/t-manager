import {GET_TASKS, NEW_TASK, EDIT_TASK, DELETE_TASK} from '../actions/types';

const initialState = []

export default function(state=initialState, action){
    const {type, payload} = action

    // @TO_DO complete func for GET, EDIT, NEW
    switch(type){
        case GET_TASKS:
            return [...state, payload];
        case NEW_TASK:
            return true;
        case EDIT_TASK:
            return true;
        case DELETE_TASK:
            return state.filter(task => task.id !== payload);
        default:
            return state;            
    }
}