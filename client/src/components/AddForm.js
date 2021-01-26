import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {setNavTitle} from '../actions/navTitle';
import {newTask} from '../actions/task'
import {setAlert} from '../actions/alert'
import Alert from './Alert';


// @TO_DO: redirect after adding the task

const AddForm = ({newTask, setNavTitle, setAlert}) => {
    useEffect(() => setNavTitle("New Task"));
    const [formData, setFormData] = useState({
        title: '',
        urgent: false,
        completed: false,
        added: false
    });

    const {title, completed, urgent, added} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    const setUrgent = () => setFormData({...formData, urgent: !urgent})
    const onSubmit = async e => {
        e.preventDefault()
        newTask(title, urgent, completed);
        setFormData({
            title: '',
            urgent: false,
            completed: false
        })
        setAlert("New task added", 'success')
        setFormData({...formData, added: true})
    }

    return (
        
        <React.Fragment>
            {!added ? 
            <React.Fragment>
                <Alert />
            <h3>Add new task:</h3>
      <div className="form-container">
          <form onSubmit = {onSubmit}>
              {/* Add task */}
              <div>
                  <label htmlFor="title" className="block">Task:</label>
                  <input className="task form-control no-focus" name="title" type="text" value={title}  onChange={onChange} />
              </div>
              <div className="start">
                  <label className="no-mg" htmlFor="urgent">Is it urgent?
                  <br />
                      <small>(don't check if not)</small>
                  </label>
                  <input type="checkbox" name="urgent" className="urgent" onChange={setUrgent} value={urgent} />
              </div>
              <div>
                  <button className="form-control no-focus btn" type="submit">Add task</button>
              </div>
          </form>
      </div>
      </React.Fragment>
       : <Redirect to="/" />}
        
   </React.Fragment>

    )

}



AddForm.propTypes = {
    setNavTitle: propTypes.func.isRequired,
    newTask: propTypes.func.isRequired,
    setAlert: propTypes.func.isRequired,
}

const mapStateToProps = state => ({
    navTitle: state.navTitle.title,
})


export default connect(mapStateToProps, {setNavTitle, newTask, setAlert})(AddForm)
