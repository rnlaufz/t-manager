import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Register extends Component {
    render() {
        return (
            <div className="container flex-center-row">
        <div  className="flex-page greeting">
            <h1 className="logo">Tasks Manager</h1>
            <p>More tasks please!</p>
        </div>
        <div className="flex-page">
            <div  class="flex-center-column login-content">
                <div className="card flex-center-column">
                    <div  className="flex-center-column form-container-sign">
                        <h3>Sign Up</h3>
                        <form>
                            <div className="form-item">
                                <label htmlFor="f-name" className="block">First Name</label>
                                <input className="form-control" type="text" id="f-name" name="f-name" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="l-name" className="block">Last Name</label>
                                <input className="form-control" type="text" id="l-name" name="l-name" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="email" class="block">Email</label>
                                <input className="form-control" type="email" id="email" name="email" />
                            </div>
                            <div className="form-item">
                                <label for="password" className="block">Password</label>
                                <input className="form-control" type="password" id="password" name="password" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="password-confirm" className="block">Confirm Password</label>
                                <input className="form-control" type="password" id="password-confirm" name="password-confirm" />
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
}

export default Register
