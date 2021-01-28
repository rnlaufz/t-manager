import {GET_USER, DELETE_USER_DATA, CHANGE_USER_DATA, DELETE_USER} from '../actions/types';

const initialState = []

export default function(state = initialState, action){
    const {type, payload} = action;
    return initialState
}