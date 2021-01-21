import React, { useEffect, useState } from 'react';
import {v4 as uuid} from 'uuid';

import propTypes from 'prop-types';

import Loader from './Loader';
import CompletedTask from "./CompletedTask";
import { connect } from 'react-redux';
import {setNavTitle} from '../actions/navTitle';
import {getCompleted} from "../actions/task";



const CompletedTasks = ({task: {tasks, noCompletes}, setNavTitle, getCompleted}) => {

  
    // @TO_DO: move checkCompleted to redux 

    useEffect(() => {
        setNavTitle("Completed");
        getCompleted()
    }, []); 

    return ( <React.Fragment>
               
    <div className="tasks-list-container">
    <h3>{!noCompletes ? "Completed tasks:" : "You have yet to complete some tasks"}</h3>
        {tasks ?  
        <ul className="tasks-list">
            {tasks.map((task) => ( 
                <CompletedTask id={uuid()} key={uuid()} task={task} />
           ))}
        </ul> :
        <Loader />}
    </div>    

        </React.Fragment>)
}


// Prop types
CompletedTasks.propTypes = {
    setNavTitle: propTypes.func.isRequired,
    getCompleted: propTypes.func.isRequired,
    task: propTypes.object.isRequired,
}

const mapStateToProps = state => ({
    navTitle: state.navTitle.title,
    task: state.task,
})

export default connect(mapStateToProps, {setNavTitle, getCompleted})(CompletedTasks)
