import React, { useEffect } from 'react';
import {v4 as uuid} from 'uuid';

import propTypes from 'prop-types';

import Loader from './Loader';
import Task from "./Task";
import { connect } from 'react-redux';
import {setNavTitle} from '../actions/navTitle';
import {getTasks} from "../actions/task";



const Tasks = ({getTasks, auth, task: {tasks}, setNavTitle}) => {
    useEffect(() => {
        setNavTitle("Dashboard");
        getTasks();
    }, []); 
    
    return ( <React.Fragment>
               
    <div className="tasks-list-container">
    <h3>My Tasks:</h3>
        {tasks ?  
        <ul className="tasks-list">
            {tasks.map((task) => (
                <Task id={uuid()} key={uuid()} task={task} />
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
