import React, { Component } from 'react'

import PropTypes from 'prop-types'

import Task from "./Task"


export class Tasks extends Component {

   
    state = {
        navTitle: "Dashboard"
    }

  componentDidMount(){
      this.props.updateNav(this.state.navTitle)
  }

    render() {
        
        return (
            <React.Fragment>
               
        <div className="tasks-list-container">
        <h3>My Tasks:</h3>
        <ul className="tasks-list">
                {this.props.tasks.map((task) => (
                    <Task key={task.id} task={task} deleteTask={this.props.deleteTask} markCompleted={this.props.markCompleted} 
                    />
                ))}
                    </ul>
                </div>    

            </React.Fragment>
        )
    }
}

// Prop types
Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks
