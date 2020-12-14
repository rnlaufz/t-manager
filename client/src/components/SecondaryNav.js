import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {logout} from '../actions/auth';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCog, faPlus, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'


// @TO_DO: brainstorm about possible layout changes 

const SecondaryNav = ({auth: {isAuthenticated, loading}, logout}) => {
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


SecondaryNav.propTypes = {
  logout: propTypes.func.isRequired,
  auth: propTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps, {logout})(SecondaryNav);
