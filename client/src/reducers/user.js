import {DELETE_USER_DATA, CHANGE_USER_DATA, DELETE_USER} from '../actions/types';

const initialState = {
    
}

export default function(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case DELETE_USER_DATA: 
            return {
                ...state,
            };
        case CHANGE_USER_DATA:
            return {
                ...state,
            };
        case DELETE_USER:
            return {
                ...state,
            }       
        default:
            return state;
    }
}