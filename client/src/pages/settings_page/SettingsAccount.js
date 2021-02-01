import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class SettingsAccount extends Component {
    render() {
        return (
            <React.Fragment>
                <h3>Manage account</h3>
        <div className="data-actions">
          <ul>
              <li><button >Delete my account</button></li>
              <li><button >Reset my data</button></li>
          </ul>
      </div> 
            </React.Fragment>    
        )
    }
}

export default SettingsAccount
