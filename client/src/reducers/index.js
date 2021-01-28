import {combineReducers} from 'redux';

import alert from './alert';
import auth from './auth';
import navTitle from './navTitle';
import task from './task';
import user from './user';

export default combineReducers({
    alert,
    auth,
    navTitle,
    task,
    user
});