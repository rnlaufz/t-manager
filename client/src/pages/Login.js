import React, { useState, useEffect } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';

import {login} from '../actions/auth';
import {setNavTitle} from '../actions/navTitle'

import Alert from '../components/Alert';


const Login = ({login, isAuthenticated, setNavTitle}) =>  {
    useEffect(() => setNavTitle("Login"));
    const [formData, setFormData] = useState({
        email:  "",
        password: "",
    });

    const {email, password} = formData;

   const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});


    const onSubmit = async e => {
        e.preventDefault();
         login(email, password)
       
    
    }

    // Redirect if logged in
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
            <div  className="flex-center-column login-content">
                <Alert />
                <div className="card flex-center-column">
                    <div  className="flex-center-column form-container-sign">
                        <h3>Sign In</h3>
                        <form onSubmit={e => onSubmit(e)}>
                            <div className="form-item">
                                <label htmlFor="email" className="block">Email</label>
                                <input className="form-control" type="email" id="email" name="email" value={email} onChange={e => onChange(e)} required/>
                            </div>
                            <div className="form-item">
                                <label htmlFor="password" className="block">Password</label>
                                <input className="form-control" type="password" id="password" name="password" value={password} onChange={e => onChange(e)} required
                                minLength="6" />
                            </div>
                            <div className="form-item">
                                <input className="form-control btn" type="submit" id="submit-btn" value="Submit" />
                            </div>
                        </form>
                    </div>
                    <p>Do not have an account? <Link to="/">Sign Up here!</Link> </p>
                </div>
            </div>
            
        </div>
        
    </div>
    );
};

Login.propTypes = {
    login: propTypes.func.isRequired,
    isAuthenticated: propTypes.bool,
    setNavTitle: propTypes.func.isRequired,

}

 const mapStateToProps = state => ({
    navTitle: state.navTitle.title,
    isAuthenticated: state.auth.isAuthenticated
 })

export default connect(mapStateToProps, {setNavTitle, login})(Login);