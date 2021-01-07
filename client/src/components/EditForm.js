import React, { useState, useEffect} from 'react'
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {setNavTitle} from '../actions/navTitle';
import {getTaskData} from '../actions/tasks';


const EditForm = (props) => {
    useEffect(() => {
        props.setNavTitle("New Task")
    });
    console.log()
    return (
                    <React.Fragment>
                        <h3>Edit Task</h3>
                        <div className="form-container">
                            <form >
                                <div>
                                    <label htmlFor="task" className="block">Task:</label>
                                    <input id="task" name="task" type="text" className="task form-control no-focus"  />
                                </div>
                                <div className="start">
                                    <label className="no-mg" htmlFor="urgent">Is it urgent?
                                        <br />
                                        <small>(don't check if not)</small>
                                    </label>
                                    <input type="checkbox" name="urgent" id="urgent" />
                                </div>
                                <div>
                                    <button className="form-control no-focus btn" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                     </React.Fragment>   
                )
}


EditForm.propTypes = {
    setNavTitle: propTypes.func.isRequired,
    getTaskData: propTypes.func.isRequired,
    taskToEdit: propTypes.object.isRequired,
}

const mapStateToProps = state => ({
    navTitle: state.navTitle.title,
    taskToEdit: state.taskToEdit
})

export default connect(mapStateToProps, {setNavTitle, getTaskData})(EditForm)
