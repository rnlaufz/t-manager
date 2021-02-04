import React from 'react'
import {connect} from 'react-redux';
import propTypes from 'prop-types';

import {resetTasks} from '../../actions/task';
import {deleteUser} from '../../actions/auth';


const SettingsAccount = ({resetTasks, deleteUser}) =>  {
    const deleteTasks = e => {
        e.preventDefault();
        if(window.confirm("This action will delete all your tasks. Do you want to continue?")){
            resetTasks()
        }
    }
    const removeUser = e => {
        e.preventDefault();
        if(window.confirm("This action delete your account. Do you want to continue?")){
            deleteUser()
        }
    }
    return (
        <React.Fragment>
        <h3>Manage account</h3>
        <div className="data-actions">
            <ul>
                <li><button onClick={removeUser}>Delete my account</button></li>
                 <li><button onClick={deleteTasks} >Reset my tasks</button></li>
            </ul>
        </div> 
    </React.Fragment>    
    )
}


SettingsAccount.propTypes = {
    resetTasks: propTypes.func.isRequired,
    deleteUser: propTypes.func.isRequired,
}


export default connect(null, {resetTasks, deleteUser})(SettingsAccount)
