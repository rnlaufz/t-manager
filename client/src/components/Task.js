import React, { Component } from 'react'
import {Link} from "react-router-dom"
import propTypes from 'prop-types'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faEdit, faExclamationCircle, faTrash} from '@fortawesome/free-solid-svg-icons';

import {getTaskData} from "../actions/tasks"
import {deleteTask} from "../actions/tasks"
import {getTasks} from "../actions/tasks"


import { connect } from 'react-redux';


const Task = (props) => {
    const getStyle = () => {
        return {
            textDecoration: props.task.completed ? "line-through" : "none"
        }
    
      }

      const {_id, title, urgent, completed} = props.task;

    // Send task data to the action for editing 
      const sendData = () => {
        props.getTaskData(_id)     
 }

    // Click button to send tasks id to delete action 
    const deleteTask = async () => {
     await props.deleteTask(_id);
     props.getTasks() 
    } 
 
    return (
        <li id={_id} style={getStyle()} className="task"> <p className="list-item-control">{title} {urgent ? <small className="urgent"><FontAwesomeIcon icon={faExclamationCircle} /></small> : null}</p>
        <button className="completed li-btn"><i><FontAwesomeIcon icon={faCheck} /></i></button>
         <Link to="/edit_task" className="edit li-btn"><i><FontAwesomeIcon icon={faEdit} onClick={sendData} /></i></Link>
            <button onClick={deleteTask} className="delete li-btn"><i><FontAwesomeIcon icon={faTrash} /></i></button></li>
      
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
