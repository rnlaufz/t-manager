import React, { useState, useEffect, useCallback} from 'react'
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {setNavTitle} from '../actions/navTitle';
import {getTaskData} from '../actions/task';
import { setAlert } from '../actions/alert';


const EditForm = ({setNavTitle, getTaskData, task: {task}}) => {
    
    useEffect(()=> {
        setNavTitle("New Task");
      });
    return (
                    <React.Fragment>
                        {/* @TO_DO: add loading component */}
                        {task === null ? (<h2>Loading</h2>) : <React.Fragment> <h3>Edit Task</h3>
                        <div className="form-container">
                            <form >
                                <div>
                                    <label htmlFor="task" className="block">Task:</label>
                                    <input id="task" name="task" type="text" className="task form-control no-focus" value={task.title}/>
                                </div>
                                <div className="start">
                                    <label className="no-mg" htmlFor="urgent">Is it urgent?
                                        <br />
                                        <small>(don't check if not)</small>
                                    </label>
                                    <input type="checkbox" name="urgent" id="urgent" checked={task.urgent} />
                                </div>
                                <div>
                                    <button className="form-control no-focus btn" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                        </React.Fragment>}
                        
                     </React.Fragment>   
                )
}


EditForm.propTypes = {
    setNavTitle: propTypes.func.isRequired,
    getTaskData: propTypes.func.isRequired,
}

const mapStateToProps = state => ({
    navTitle: state.navTitle.title,
    task: state.task
})

export default connect(mapStateToProps, {setNavTitle, getTaskData})(EditForm)
