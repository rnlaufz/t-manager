import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class SettingsAccount extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>Manage account</h3>
        <div className="data-actions">
          <ul>
              <li><Link to="">Delete my account</Link></li>
              <li><Link to="">Reset my data</Link></li>
          </ul>
      </div> 
            </React.Fragment>    
        )
    }
}

export default SettingsAccount
