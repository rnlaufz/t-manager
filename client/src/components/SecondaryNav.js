import React from 'react';
import {Link} from 'react-router-dom'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCog, faPlus, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'



export class SecondaryNav extends React.Component {

  render() {
    return (
      <div className="flex-center-row secondary-nav">
    <h2><span className="logo title">Tasks Manager</span> | {this.props.navTitle}</h2>
    <ul className="flex-center-row">
      
        <li><Link to='/new_task'><i><FontAwesomeIcon icon={faPlus} /></i></Link></li>
        <li><Link to="/settings/user_data"><i ><FontAwesomeIcon icon={faCog} /></i></Link></li>
        {/* This one temporarily leads to index page */}
        <li><Link to="/"><i><FontAwesomeIcon icon={faSignOutAlt} /></i></Link></li>
       
    </ul>
</div> 
    )
  }
}

export default SecondaryNav
