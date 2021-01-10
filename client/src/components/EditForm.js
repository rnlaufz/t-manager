import React, { useState, useEffect, useCallback} from 'react'
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {setNavTitle} from '../actions/navTitle';
import {getTaskData, editTask, getTasks} from '../actions/task';
import { setAlert } from '../actions/alert';

const intialState = {
    id: '',
    title: '',
    urgent: false,
    completed: false
}

const EditForm = ({setNavTitle, getTaskData, editTask, getTasks, task: {task, loading}}) => {
    
    useEffect(()=> {
        setNavTitle("New Task");
        if(!task) getTaskData();
        if(!loading && task){ 
            const taskData = {...intialState};
            for(const key in taskData) {
                if(key in taskData) taskData[key] = task[key]
            }
        console.log(taskData)    
        }
      },[task, loading, setNavTitle, getTaskData]);
     
      const [formData, setFormData] = useState(intialState);

    const {id, title, completed, urgent} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    const setUrgent = () => setFormData({...formData, urgent: !urgent})
    const onSubmit = async e => {
        e.preventDefault()
      await editTask(id, title, urgent, completed);
        setFormData({
            title: '',
            urgent: false,
            completed: false
        })
        getTasks()
    }  
    return (
                    <React.Fragment>
                        {/* @TO_DO: add loading component */}
                        {task === null ? (<h2>Loading</h2>) :
                      
                        <React.Fragment> <h3>Edit Task</h3>
                        <div className="form-container">
                            <form onSubmit={onSubmit}>
                                <div>
                                    <label htmlFor="task" className="block">Task:</label>
                                    <input id="task" name="task" type="text" className="task form-control no-focus" onChange={onChange}/>
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
                        </React.Fragment>}
                        
                     </React.Fragment>   
                )
                       
}


EditForm.propTypes = {
    setNavTitle: propTypes.func.isRequired,
    getTaskData: propTypes.func.isRequired,
    editTask: propTypes.func.isRequired,
    getTasks: propTypes.func.isRequired,
}

const mapStateToProps = state => ({
    navTitle: state.navTitle.title,
    task: state.task
})

export default connect(mapStateToProps, {setNavTitle, getTaskData, editTask, getTasks})(EditForm)
