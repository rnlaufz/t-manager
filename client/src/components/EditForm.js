import React, { useState, useEffect, useCallback} from 'react'
import propTypes from 'prop-types';
import Loader from './Loader'
import { connect } from 'react-redux';
import {setNavTitle} from '../actions/navTitle';
import {getTaskData, editTask, getTasks} from '../actions/task';
import { setAlert } from '../actions/alert';

let intialState = {
    _id: '',
    title: '',
    urgent: null,
    completed: null
}

// @TO_DO: fix wrong data compilation -> {title:{id:--, ...} urgent: ---} - this is how it looks like and it shouldn't

const EditForm = ({setNavTitle, getTaskData, getTasks, editTask, task: {task, loading}}) => {
    const [formData, setFormData] = useState(intialState);
    
    useEffect(()=> {
        setNavTitle("New Task");
        if(!task) getTaskData();
        if(!loading && task){ 
            const taskData = {...intialState};
            for(const key in taskData) {
                if(key in taskData) taskData[key] = task[key]
            }  
        }
      },[task, loading, setNavTitle, getTaskData]);
    
    const {_id, title, urgent, completed } = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    const setUrgent = () => setFormData({...formData, urgent: !urgent})
    const onSubmit = async e => {
        e.preventDefault()
       editTask(formData, task, _id ? {_id, title, urgent, completed }: false);
       getTasks()
        // setFormData({
        //     _id: '',
        //     title: '',
        //     urgent: false,
        //     completed: false
        // })
      
    }
    return (
                    <React.Fragment>
                        {task === null ? (<Loader />) :
                     <React.Fragment> <h3>Edit Task</h3>
                        <div className="form-container">
                            <form onSubmit={onSubmit}>
                                <div>
                                    <label htmlFor="task" className="block">Task:</label>
                                    <input id="task" name="task" type="text" className="task form-control no-focus" onChange={onChange} />
                                </div>
                                <div className="start">
                                    <label className="no-mg" htmlFor="urgent">Is it urgent?
                                        <br />
                                        <small>(don't check if not)</small>
                                    </label>
                                    <input type="checkbox" name="urgent" id="urgent"  onChange={setUrgent} />
                                </div>
                                <div>
                                    <button className="form-control no-focus btn" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                        </React.Fragment>
                      }
                        
                     </React.Fragment>   
                )
                       
}


EditForm.propTypes = {
    setNavTitle: propTypes.func.isRequired,
    getTaskData: propTypes.func.isRequired,
    getTasks: propTypes.func.isRequired,
    editTask: propTypes.func.isRequired,
    getTasks: propTypes.func.isRequired,
    task: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    navTitle: state.navTitle.title,
    task: state.task
})

export default connect(mapStateToProps, {setNavTitle, getTaskData, editTask, getTasks})(EditForm)
