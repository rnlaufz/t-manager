import {DASH_TITLE} from '../actions/types';

const inintialState = [];

export default function(state = inintialState, action){
    const {type} = action
    switch(type){
        case DASH_TITLE:
            return [...state,
                {title: action.text}
            ];    
        default:
            return state;    
    }
}