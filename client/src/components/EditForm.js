import React, { useState, useEffect, useCallback} from 'react';
import {Redirect} from 'react-router-dom';
import propTypes from 'prop-types';
import Loader from './Loader';
import { connect } from 'react-redux';
import {setNavTitle} from '../actions/navTitle';
import {getTaskData, editTask} from '../actions/task';
import { setAlert } from '../actions/alert';

let intialState = {
    _id: '',
    title: '',
    urgent: false,
    completed: false,
    taskEdited: false
}

// @TO_DO: fix wrong data compilation -> {title:{id:--, ...} urgent: ---} - this is how it looks like and it shouldn't

const EditForm = ({setNavTitle, getTaskData, editTask, task: {task, loading}}) => {
    const [formData, setFormData] = useState(intialState);
    const {_id, title, urgent, completed, taskEdited } = formData;
    useEffect(()=> {
        setNavTitle("New Task");
        if(!task) getTaskData();
        if(!loading && task){ 
            const taskData = {...intialState, _id: task._id};
            setFormData(task._id ? {...formData, _id: task._id} : false)
            for(const key in taskData) {
                if(key in taskData) taskData[key] = task[key]
            }  
        }
        
      },[task, loading, setNavTitle, getTaskData]);
    
   
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    const setUrgent = () => setFormData({...formData, urgent: !urgent});
    
    const onSubmit = e => {
        e.preventDefault()
        const sendData = formData;
       editTask(formData, task, _id ? true && sendData : false);
       setFormData({...formData, taskEdited: !taskEdited})
    }
    return (
                    // <React.Fragment>
                    //     {task === null ? (<Loader />) :
                    //  <React.Fragment> <h3>Edit Task</h3>
                    //     <div className="form-container">
                    //         <form onSubmit={onSubmit}>
                    //             <div>
                    //                 <label htmlFor="title" className="block">Task:</label>
                    //                 <input id="title" name="title" type="text" className="task form-control no-focus" onChange={onChange} />
                    //             </div>
                    //             <div className="start">
                    //                 <label className="no-mg" htmlFor="urgent">Is it urgent?
                    //                     <br />
                    //                     <small>(don't check if not)</small>
                    //                 </label>
                    //                 <input type="checkbox" name="urgent" id="urgent"  onChange={setUrgent} />
                    //             </div>
                    //             <div>
                    //                 <button className="form-control no-focus btn" type="submit">Submit</button>
                    //             </div>
                    //         </form>
                    //     </div>
                    //     </React.Fragment>
                    //   }
                        
                    //  </React.Fragment>   
                     <React.Fragment>
                        {!taskEdited ? (task === null ? (<Loader />) :
                     <React.Fragment> <h3>Edit Task</h3>
                        <div className="form-container">
                            <form onSubmit={onSubmit}>
                                <div>
                                    <label htmlFor="title" className="block">Task:</label>
                                    <input id="title" name="title" type="text" className="task form-control no-focus" onChange={onChange} />
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
                        </React.Fragment>) : < Redirect to="/"/>
                      }
                        
                     </React.Fragment>  
                )
                       
}


EditForm.propTypes = {
    setNavTitle: propTypes.func.isRequired,
    getTaskData: propTypes.func.isRequired,
    editTask: propTypes.func.isRequired,
    task: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    navTitle: state.navTitle.title,
    task: state.task
})

export default connect(mapStateToProps, {setNavTitle, getTaskData, editTask})(EditForm)
