import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux'; 
import {setAlert} from '../actions/alert';
import {register} from '../actions/auth';
import {setNavTitle} from '../actions/navTitle'

import Alert from '../components/Alert'

 const Register = ({setAlert, register, isAuthenticated, setNavTitle}) => {
    useEffect(() => setNavTitle("Register"));
    const [formData, setFormData] = useState({
        name: "",
        email:  "",
        password: "",
        passwordTwo: ""  
    });

    const {name, email, password, passwordTwo} = formData;

   const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = async e => {
        e.preventDefault();

        if(password !== passwordTwo){
            setAlert("Passwords do not match", 'danger')
        } else {
         register({name, email, password});
         setFormData({
            name: "",
            email:  "",
            password: "",
            passwordTwo: ""  
         })
        }
    }
    
    // Redirect after registration 
    if(isAuthenticated){
        return <Redirect to="/dashboard" />
    }

    return (
        <div className="container flex-center-row">
        <div  className="flex-page greeting">
            <h1 className="logo">Tasks Manager</h1>
            <p>More tasks please!</p>
        </div>
        <div className="flex-page">
            <div className="flex-center-column login-content">
                <Alert />
                <div className="card flex-center-column">
                    <div  className="flex-center-column form-container-sign">
                        <h3>Sign Up</h3>
                        <form onSubmit={e => onSubmit(e)}>
                            <div className="form-item">
                                <label htmlFor="name" className="block">Name</label>
                                <input className="form-control" type="text" id="name" name="name" value={name} onChange={e => onChange(e)} />
                            </div>
                            <div className="form-item">
                                <label htmlFor="email" className="block">Email</label>
                                <input className="form-control"  id="email" name="email" value={email} onChange={e => onChange(e)} />
                            </div>
                            <div className="form-item">
                                <label htmlFor="password" className="block">Password</label>
                                <input className="form-control" type="password" id="password" name="password" value={password} onChange={e => onChange(e)} 
                                minLength="6" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="passwordTwo" className="block">Confirm Password</label>
                                <input className="form-control" type="password" id="passwordTwo" name="passwordTwo" value={passwordTwo} onChange={e => onChange(e)} minLength="6" />
                            </div>
                            <div className="form-item">
                                <input className="form-control btn" type="submit" id="submit-btn" value="Submit" />
                            </div>
                        </form>
                    </div>
                    <p>Already have an account? <Link to="/login">Sign In here!</Link> </p>
                </div>
            </div>
            
        </div>
        
    </div>
    )
}

Register.propTypes = {
    setAlert: propTypes.func.isRequired,
    setNavTitle: propTypes.func.isRequired,
    register: propTypes.func.isRequired,
    isAuthenticated: propTypes.bool
}

 const mapStateToProps = state => ({
    navTitle: state.navTitle.title,
    isAuthenticated: state.auth.isAuthenticated
 })

export default connect(mapStateToProps, {setAlert, register, setNavTitle})(Register)

