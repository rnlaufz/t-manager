import React, { Component } from 'react'
import {Link} from "react-router-dom"
import PropTypes from 'prop-types'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCheck, faEdit, faExclamationCircle, faTrash} from '@fortawesome/free-solid-svg-icons';

export class Task extends Component {

    getStyle = () => {
      return {
          textDecoration: this.props.task.completed ? "line-through" : "none"
      }

    }


    render() {
        const {id} = this.props.task;
        return (
        <li style={this.getStyle()} className="task"> <p className="list-item-control">{this.props.task.title} {this.props.task.urgent ? <small className="urgent"><FontAwesomeIcon icon={faExclamationCircle} /></small> : null}</p>
        <button onClick={this.props.markCompleted.bind(this, id)} className="completed li-btn"><i><FontAwesomeIcon icon={faCheck} /></i></button>
         <Link to="/dashboard/edit_task" className="edit li-btn" ><i><FontAwesomeIcon icon={faEdit} /></i></Link>
            <button onClick={this.props.deleteTask.bind(this, id)} className="delete li-btn"><i><FontAwesomeIcon icon={faTrash} /></i></button></li>
        )
    }
}

// Prop types
Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task
