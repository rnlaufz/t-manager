import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';



 const SettingsUserData = () => {
    const [formData, setFormData] = useState({
        nemail: '',
        npassword: '',
        npasswordTwo: ''
    });

    const {nemail, npassword, npasswordTwo} = formData;

    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        e.preventDefault();
        let conf = window.confirm("Change user data")
        if(conf && nemail !== ''){
        //   send email to the server
            setFormData({
                name: "",
                email:  "",
                password: "",
                passwordTwo: ""  
             })

            console.log('email here')
        }
        if(conf && npassword !== '' && npasswordTwo !== ''){
            console.log('password here')
            if(npassword !== npasswordTwo){
                console.log('no match')
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
            <form onSubmit={onSubmit}>
        <h3>User data</h3>
      <div>
          <label htmlFor="u-email" className="block">Change email:</label>
          <input name="nemail" type="text" className="form-control no-focus" placeholder="New email" onChange={onChange} />
      </div>
      <div>
          <label htmlFor="password" className="block">Change password:</label>
          <input name="npassword" type="password" className="form-control no-focus" placeholder="New password" onChange={onChange} />
      </div>
      <div>
          <label htmlFor="passwordTwo" className="block">Confirm new password:</label>
          <input name="npasswordTwo" type="password" className="form-control no-focus" placeholder="New confirm new password" onChange={onChange} />
      </div>
     
      <div>
          <input className="form-control no-focus btn" type="submit"  value={"Submit"} />
      </div>
      </form>
        </div>
    </React.Fragment>    
    )
}

// Prop types
// SettingsUserData.propTypes = {
//     getUser: propTypes.func.isRequired,
// }

// const mapStateToProps = state => ({
//    
// })

export default connect(null, {})(SettingsUserData)
