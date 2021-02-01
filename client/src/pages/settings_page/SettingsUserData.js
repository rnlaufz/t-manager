import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import {updateUserData} from '../../actions/auth';
import Alert from '../../components/Alert';
import {setAlert} from '../../actions/alert';

 const SettingsUserData = ({setAlert, updateUserData}) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        passwordTwo: ''
    });

    const {email, password, passwordTwo} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        e.preventDefault();
        let conf = window.confirm("Are you sure you want to change your credentials?")
        if(conf && email !== ''){
           await updateUserData(formData)
            setFormData({
                email:  "",
                password: "",
                passwordTwo: ""  
             })
        }
        if(conf && password !== '' && passwordTwo !== ''){
            if(password !== passwordTwo){
                setAlert("Passwords do not match", 'danger')
            } else {
            await updateUserData(formData)
             setFormData({
                email:  "",
                password: "",
                passwordTwo: ""  
             })
            }
        } 
    }

    return (
        <React.Fragment>
        <div className="form-container">
            <Alert/>
            <form onSubmit={onSubmit}>
        <h3>User data</h3>
      <div>
          <label htmlFor="u-email" className="block">Change email:</label>
          <input name="email" type="text" className="form-control no-focus" placeholder="New email" onChange={onChange} />
      </div>
      <div>
          <label htmlFor="password" className="block">Change password:</label>
          <input name="password" type="password" className="form-control no-focus" placeholder="New password" onChange={onChange} />
      </div>
      <div>
          <label htmlFor="passwordTwo" className="block">Confirm new password:</label>
          <input name="passwordTwo" type="password" className="form-control no-focus" placeholder="New confirm new password" onChange={onChange} />
      </div>
     
      <div>
          <input className="form-control no-focus btn" type="submit"  value="Submit" />
      </div>
      </form>
        </div>
    </React.Fragment>    
    )
}

// Prop types
SettingsUserData.propTypes = {
    setAlert: propTypes.func.isRequired,
    updateUserData: propTypes.func.isRequired,
}

// const mapStateToProps = state => ({
//    
// })

export default connect(null, {setAlert, updateUserData})(SettingsUserData)
