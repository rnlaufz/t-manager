import React, { Component } from 'react'
import {Link} from "react-router-dom"
import propTypes from 'prop-types'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faEdit, faExclamationCircle, faTrash} from '@fortawesome/free-solid-svg-icons';

import {getTaskData} from "../actions/tasks"

import { connect } from 'react-redux';


const Task = (props, {getTaskData}) => {
    const getStyle = () => {
        return {
            textDecoration: props.task.completed ? "line-through" : "none"
        }
    
      }

      const {_id, title, urgent, completed} = props.task;

    //   @TO_DO: fix notFuction issue
      const sendData = (e) => {
        e.preventDefault()
        props.getTaskData(_id, title, urgent, completed)     
           
          
      }
 
    return (
        <li id={_id} style={getStyle()} className="task"> <p className="list-item-control">{title} {urgent ? <small className="urgent"><FontAwesomeIcon icon={faExclamationCircle} /></small> : null}</p>
        <button className="completed li-btn"><i><FontAwesomeIcon icon={faCheck} /></i></button>
         <Link to="/edit_task" className="edit li-btn"><i><FontAwesomeIcon icon={faEdit} onClick={sendData} /></i></Link>
            <button className="delete li-btn"><i><FontAwesomeIcon icon={faTrash} /></i></button></li>
      
        )
}

// Prop types
Task.propTypes = {
    task: propTypes.object.isRequired,
    getTaskData: propTypes.func.isRequired,
}


export default connect(null, {getTaskData})(Task)
