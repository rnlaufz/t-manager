import {DASH_TITLE} from './types';


// @TO_DO finish action of setting secNav title 
export const setNavTitle = (navTitle) => dispatch => {
 dispatch({
     type: DASH_TITLE,
     navTitle: navTitle
 })
   
}