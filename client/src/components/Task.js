import React, { Component } from 'react'
import {Link} from "react-router-dom"
import propTypes from 'prop-types'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faEdit, faExclamationCircle, faTrash} from '@fortawesome/free-solid-svg-icons';



const Task = (props) => {
    const getStyle = () => {
        return {
            textDecoration: props.task.completed ? "line-through" : "none"
        }
    
      }
    return (
        <li style={getStyle()} className="task"> <p className="list-item-control">{props.task.title} {props.task.urgent ? <small className="urgent"><FontAwesomeIcon icon={faExclamationCircle} /></small> : null}</p>
        <button className="completed li-btn"><i><FontAwesomeIcon icon={faCheck} /></i></button>
         <Link to="/edit_task" className="edit li-btn" ><i><FontAwesomeIcon icon={faEdit} /></i></Link>
            <button className="delete li-btn"><i><FontAwesomeIcon icon={faTrash} /></i></button></li>
      
        )
}

// Prop types
Task.propTypes = {
    task: propTypes.object.isRequired
}

export default Task
