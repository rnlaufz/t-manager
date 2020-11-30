import React, { useState } from 'react'
import {Link} from 'react-router-dom'


export default function Register() {

    const [formData, setFormData] = useState({
        name: "",
        lName: "",
        email:  "",
        password: "",
        passwordTwo: ""  
    });

    const {name, lName, email, password, passwordTwo} = formData;

   const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
    

    return (
        <div className="container flex-center-row">
        <div  className="flex-page greeting">
            <h1 className="logo">Tasks Manager</h1>
            <p>More tasks please!</p>
        </div>
        <div className="flex-page">
            <div  className="flex-center-column login-content">
                <div className="card flex-center-column">
                    <div  className="flex-center-column form-container-sign">
                        <h3>Sign Up</h3>
                        <form>
                            <div className="form-item">
                                <label htmlFor="name" className="block">First Name</label>
                                <input className="form-control" type="text" id="name" name="name" value={formData.name} onChange={e => onChange(e)} required/>
                            </div>
                            <div className="form-item">
                                <label htmlFor="lName" className="block">Last Name</label>
                                <input className="form-control" type="text" id="lName" name="lName" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="email" className="block">Email</label>
                                <input className="form-control" type="email" id="email" name="email" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="password" className="block">Password</label>
                                <input className="form-control" type="password" id="password" name="password" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="passwordTwo" className="block">Confirm Password</label>
                                <input className="form-control" type="password" id="passwordTwo" name="passwordTwo" />
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



