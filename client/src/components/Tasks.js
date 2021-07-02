import React, { useEffect } from 'react';
import {v4 as uuid} from 'uuid';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import NoTasks from './NoTasks';
import Task from "./Task";
import Alert from './Alert';


import {setNavTitle} from '../actions/navTitle';
import {getTasks} from "../actions/task";

const Tasks = ({getTasks, task: {tasks}, setNavTitle}) => {
    useEffect(() => {
        setNavTitle("Dashboard");
        getTasks();
    }, [getTasks, setNavTitle]); 
    
    return ( <React.Fragment>
     <Alert />          
    <div className="tasks-list-container">
        {tasks.length !== 0 ?
        <React.Fragment>
        <h3>My Tasks:</h3>
        <ul className="tasks-list">
            {tasks.map((task) => ( !task.completed ?
                <Task id={uuid()} key={uuid()} task={task} /> : null
            ))}
        </ul>
        </React.Fragment>
        : 
        // Change to NoTasks
        <NoTasks />}
    </div>    

        </React.Fragment>)
}


// Prop types
Tasks.propTypes = {
    setNavTitle: propTypes.func.isRequired,
    getTasks: propTypes.func.isRequired,
    task: propTypes.object.isRequired,
}

const mapStateToProps = state => ({
    navTitle: state.navTitle.title,
    task: state.task,
})

export default connect(mapStateToProps, {setNavTitle, getTasks})(Tasks)
