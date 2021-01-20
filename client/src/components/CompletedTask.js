import React, { Component } from 'react'
import {Link} from "react-router-dom"
import propTypes from 'prop-types'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faEdit, faExclamationCircle, faTrash} from '@fortawesome/free-solid-svg-icons';

import {deleteTask} from "../actions/task"
import {getTasks} from "../actions/task"


import { connect } from 'react-redux';


const CompletedTask = ({getTasks, deleteTask, task: {_id, title, urgent, completed}}) => {
   
    // Click button to send tasks id to delete action 
    const deleteSelectedTask = async () => {
     await deleteTask(_id);
     getTasks() 
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
    getTasks: propTypes.func.isRequired,
}


export default connect(null, {deleteTask, getTasks})(CompletedTask)