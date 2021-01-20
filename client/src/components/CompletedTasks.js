import React, { useEffect, useState } from 'react';
import {v4 as uuid} from 'uuid';

import propTypes from 'prop-types';

import Loader from './Loader';
import CompletedTask from "./CompletedTask";
import { connect } from 'react-redux';
import {setNavTitle} from '../actions/navTitle';
import {getTasks} from "../actions/task";



const CompletedTasks = ({getTasks, task: {tasks}, setNavTitle, checkCompleted}) => {

    const [compState, setCompState] = useState({
        noCompleted: true 
    })
   
    // @TO_DO: move checkCompleted to redux 

    useEffect(() => {
        setNavTitle("Completed");
        checkCompleted = tasks.every(task => task.completed)
        if(!checkCompleted){
            setCompState({...compState, noCompleted: true})
        } else {
            setCompState({...compState, noCompleted: false})
        }
        getTasks();
    }, [getTasks, checkCompleted]); 

    const {noCompleted} = compState;
    return ( <React.Fragment>
               
    <div className="tasks-list-container">
    <h3>Completed Tasks</h3>
       {!noCompleted ? (tasks ?  
        <ul className="tasks-list">
            {tasks.map((task) => ( task.completed ? 
                <CompletedTask id={uuid()} key={uuid()} task={task} />
            : null))}
        </ul> :
        <Loader />) : <h3>You have yet to complete some tasks</h3>}
     
        {/* {tasks ?  
        <ul className="tasks-list">
            {tasks.map((task) => ( task.completed ? 
                <CompletedTask id={uuid()} key={uuid()} task={task} />
            : null))}
        </ul> :
        <Loader />} */}
    </div>    

        </React.Fragment>)
}


// Prop types
CompletedTasks.propTypes = {
    setNavTitle: propTypes.func.isRequired,
    getTasks: propTypes.func.isRequired,
    task: propTypes.object.isRequired,
}

const mapStateToProps = state => ({
    navTitle: state.navTitle.title,
    task: state.task,
})

export default connect(mapStateToProps, {setNavTitle, getTasks})(CompletedTasks)
