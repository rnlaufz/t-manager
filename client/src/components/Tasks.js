import React, { useEffect } from 'react'
import {v4 as uuid} from 'uuid'

import propTypes from 'prop-types'

import Task from "./Task"
import { connect } from 'react-redux'
import {setNavTitle} from '../actions/navTitle'
import {getTasks} from "../actions/tasks"



const Tasks = ({getTasks, auth, tasks, setNavTitle}) => {
    useEffect(() => {
        setNavTitle("Dashboard");
        getTasks();
    }, []); 
    const tasksObj = tasks.tasks;
    return ( <React.Fragment>
               
    <div className="tasks-list-container">
    <h3>My Tasks:</h3>
    <ul className="tasks-list">
            {tasksObj.map((task) => (
                <Task id={uuid()} key={uuid()} task={task} />
            ))}
                </ul>
            </div>    

        </React.Fragment>)
}


// Prop types
Tasks.propTypes = {
    tasks: propTypes.array.isRequired,
    setNavTitle: propTypes.func.isRequired,
    getTasks: propTypes.func.isRequired,
    tasks: propTypes.object.isRequired,
}

const mapStateToProps = state => ({
    navTitle: state.navTitle.title,
    tasks: state.tasks 
})

export default connect(mapStateToProps, {setNavTitle, getTasks})(Tasks)
