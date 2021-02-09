import React from 'react';
import propTypes from 'prop-types';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationCircle, faTrash} from '@fortawesome/free-solid-svg-icons';

import {deleteTask} from "../actions/task";
import {getCompleted} from "../actions/task";
import {setAlert} from "../actions/alert";

import { connect } from 'react-redux';


const CompletedTask = ({setAlert, getCompleted, deleteTask, task: {_id, title, urgent, completed}}) => {
   
    // Click button to send tasks id to delete action 
    const deleteSelectedTask = async () => {
     await deleteTask(_id);
    getCompleted();
    setAlert("Task deleted", "danger")
    } 
 
    return (
        <li id={_id} className="task"> <p className="list-item-control">{title} {urgent ? <small className="urgent"><FontAwesomeIcon icon={faExclamationCircle} /></small> : null}</p>
       
            <button onClick={deleteSelectedTask} className="delete li-btn"><i><FontAwesomeIcon icon={faTrash} /></i></button></li>
      
        )
}

// Prop types
CompletedTask.propTypes = {
    task: propTypes.object.isRequired,
    deleteTask: propTypes.func.isRequired,
    getCompleted: propTypes.func.isRequired,
    setAlert: propTypes.func.isRequired,
}


export default connect(null, {deleteTask, getCompleted, setAlert})(CompletedTask)