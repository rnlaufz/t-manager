import {combineReducers} from 'redux';

import alert from './alert';
import auth from './auth';
import navTitle from './navTitle';
import tasks from './tasks'

export default combineReducers({
    alert,
    auth,
    navTitle,
    tasks
});