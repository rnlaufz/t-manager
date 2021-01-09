import React, { Component } from 'react'
import {Link} from "react-router-dom"
import propTypes from 'prop-types'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faEdit, faExclamationCircle, faTrash} from '@fortawesome/free-solid-svg-icons';

import {getTaskData} from "../actions/task"
import {deleteTask} from "../actions/task"
import {getTasks} from "../actions/task"


import { connect } from 'react-redux';


const Task = ({getTasks, deleteTask, getTaskData, task: {_id, title, urgent, completed}}) => {
   

    // Send task data to the action for editing 
      const sendData = () => {
        getTaskData(_id)     
 }

    // Click button to send tasks id to delete action 
    const deleteSelectedTask = async () => {
     await deleteTask(_id);
     getTasks() 
    } 
 
    return (
        <li id={_id} className="task"> <p className="list-item-control">{title} {urgent ? <small className="urgent"><FontAwesomeIcon icon={faExclamationCircle} /></small> : null}</p>
        <button className="completed li-btn"><i><FontAwesomeIcon icon={faCheck} /></i></button>
         <Link to="/edit_task" className="edit li-btn"><i><FontAwesomeIcon icon={faEdit} onClick={sendData} /></i></Link>
            <button onClick={deleteSelectedTask} className="delete li-btn"><i><FontAwesomeIcon icon={faTrash} /></i></button></li>
      
        )
}

// Prop types
Task.propTypes = {
    task: propTypes.object.isRequired,
    getTaskData: propTypes.func.isRequired,
    deleteTask: propTypes.func.isRequired,
    getTasks: propTypes.func.isRequired,
}


export default connect(null, {getTaskData, deleteTask, getTasks})(Task)
