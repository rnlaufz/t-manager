import {DASH_TITLE, ADD_TITLE, SETTINGS_TITLE, COMPLETED_TITLE, EDIT_TITLE} from '../actions/types';

const inintialState = {
    title: "Dashboard"
};

export default function(state = inintialState, action){
    const {type} = action
    switch(type){
        case DASH_TITLE:
            return {
                ...state,
                title: "Dashboard"
            };    
        case ADD_TITLE:
            return {
                ...state,
                title: "New Task"
            };     
        case EDIT_TITLE:
            return {
                ...state,
                title: "Edit"
            };    
        case SETTINGS_TITLE:
            return {
                ...state,
                title: "Settings"
            };    
        case COMPLETED_TITLE:
            return {
                ...state,
                title: "Completed Tasks"
            };   
        default:
            return state;    
    }
};