import {DASH_TITLE} from '../actions/types';

const inintialState = {
    title: "Dashboard"
};

export default function(state = inintialState, action){
    switch(action.type){
        case DASH_TITLE:
            return {
                ...state,
                navTitle: action.navTitle
            };    
           
        default:
            return state;    
    }
};