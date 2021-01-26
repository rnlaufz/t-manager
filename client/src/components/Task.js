import React from 'react'
import {Link} from "react-router-dom"
import propTypes from 'prop-types'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faEdit, faExclamationCircle, faTrash} from '@fortawesome/free-solid-svg-icons';

import {getTaskData} from "../actions/task"
import {deleteTask} from "../actions/task"
import {completeTask} from "../actions/task"
import {getTasks} from "../actions/task"
import {setAlert} from "../actions/alert"


import { connect } from 'react-redux';



const Task = ({setAlert, getTasks, deleteTask, completeTask, getTaskData, task: {_id, title, urgent}}) => {
   

    // Send task data to the action for editing 
      const sendData = () => {
        getTaskData(_id)     
 }

    // Click button to send tasks id to delete action 
    const deleteSelectedTask = async () => {
     await deleteTask(_id);
     getTasks() 
     setAlert("Task deleted", 'danger')
    } 

    // Mark task as completed and send it to completes
    const markCompleted = async () => {
       await completeTask(_id)
       getTasks()
       setAlert("Task completed", 'success')
    }
 
    return (
        <li id={_id} className="task"> <p className="list-item-control">{title} {urgent ? <small className="urgent"><FontAwesomeIcon icon={faExclamationCircle} /></small> : null}</p>
        <button className="completed li-btn" onClick={markCompleted}><i><FontAwesomeIcon icon={faCheck} /></i></button>
         <Link to="/edit_task" className="edit li-btn"><i><FontAwesomeIcon icon={faEdit} onClick={sendData} /></i></Link>
            <button onClick={deleteSelectedTask} className="delete li-btn"><i><FontAwesomeIcon icon={faTrash} /></i></button></li>
      
        )
}

// Prop types
Task.propTypes = {
    task: propTypes.object.isRequired,
    getTaskData: propTypes.func.isRequired,
    deleteTask: propTypes.func.isRequired,
    completeTask: propTypes.func.isRequired,
    getTasks: propTypes.func.isRequired,
    setAlert: propTypes.func.isRequired,
}


export default connect(null, {getTaskData, deleteTask, completeTask, getTasks, setAlert})(Task)
