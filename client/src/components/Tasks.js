import React, { Component } from 'react'

import propTypes from 'prop-types'

import Task from "./Task"
import { connect } from 'react-redux'
import {setNavTitle} from '../actions/navTitle'

export class Tasks extends Component {
  componentDidMount(){
     this.props.setNavTitle("Dashboard");
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
    tasks: propTypes.array.isRequired,
    setNavTitle: propTypes.func.isRequired,
}

const mapStateToProps = state => ({
    navTitle: state.navTitle.title
})

export default connect(mapStateToProps, {setNavTitle})(Tasks)
