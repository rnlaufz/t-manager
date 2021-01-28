import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';


 const SettingsUserData = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        passwordTwo: ''
    });

    const {email, password, passwordTwo} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        e.preventDefault();

        if(email !== ''){
            // Send new email
            setFormData({
                name: "",
                email:  "",
                password: "",
                passwordTwo: ""  
             })
        }
        if(password !== '' && passwordTwo !== ''){
            if(password !== passwordTwo){
                // setAlert("Passwords do not match", 'danger')
            } else {
            //  send new password
             setFormData({
                name: "",
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
            <form>
        <h3>User data</h3>
      <div>
          <label htmlFor="u-email" className="block">Change email:</label>
          <input id="u-email" name="u-email" type="text" className="form-control no-focus" placeholder="New email" />
      </div>
      <div>
          <label htmlFor="u-password" className="block">Change password:</label>
          <input id="u-password" name="u-password" type="password" className="form-control no-focus" placeholder="New password" />
      </div>
      <div>
          <label htmlFor="u-password-confirm" className="block">Confirm new password:</label>
          <input id="u-password-confirm" name="u-password-confirm" type="password" className="form-control no-focus" placeholder="New confirm new password" />
      </div>
     
      <div>
          <button className="form-control no-focus btn" type="submit">Submit</button>
      </div>
      </form>
        </div>
    </React.Fragment>    
    )
}

// Prop types
SettingsUserData.propTypes = {
    setNavTitle: propTypes.func.isRequired,
    getTasks: propTypes.func.isRequired,
    task: propTypes.object.isRequired,
}

// const mapStateToProps = state => ({
//    
// })

export default connect(null, {})(SettingsUserData)
