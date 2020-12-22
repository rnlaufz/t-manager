import React from 'react'
import {Link} from 'react-router-dom';

export default function Landing() {
    return (
       <React.Fragment>
           <div className="landing-content">
                <div className="greeting">
                <h1 className="logo">Tasks Manager</h1>
                <p>More tasks please!</p>
                <div className="links">
                    <Link className="btn-link" to="/login">Sign In</Link>
                    <Link className="btn-link" to="/register">Sign Up</Link>
                </div>
                </div>
           </div>
        </React.Fragment>
    )
}
