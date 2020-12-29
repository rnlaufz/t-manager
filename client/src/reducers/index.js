import {combineReducers} from 'redux';

import alert from './alert';
import auth from './auth';
import navLinks from './navLinks';

export default combineReducers({
    alert,
    auth,
    navLinks
});