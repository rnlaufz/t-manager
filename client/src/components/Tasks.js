import React, { useEffect } from 'react';
import {v4 as uuid} from 'uuid';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import Loader from './Loader';
import Task from "./Task";
import Alert from './Alert';


import {setNavTitle} from '../actions/navTitle';
import {getTasks} from "../actions/task";



const Tasks = ({getTasks, task: {tasks}, setNavTitle}) => {
    useEffect(() => {
        setNavTitle("Dashboard");
        getTasks();
    }, []); 
    
    return ( <React.Fragment>
     <Alert />          
    <div className="tasks-list-container">
    <h3>My Tasks:</h3>
        {tasks ?
        <ul className="tasks-list">
            {tasks.map((task) => ( !task.completed ?
                <Task id={uuid()} key={uuid()} task={task} /> : null
            ))}
        </ul> : 
        <Loader />}
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
