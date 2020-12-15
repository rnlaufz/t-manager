import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {logout} from '../actions/auth';
import auth from '../reducers/auth'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCog, faPlus, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';


// @TO_DO change component to class based

export class SecondaryNav extends Component {

  render() {
    const {isAuthenticated, loading} = auth;
    const {logout} = auth;
    const authLinks = (
      <ul className="flex-center-row">
         <li><Link to='/new_task'><i><FontAwesomeIcon icon={faPlus} /></i></Link></li>
          <li><Link to="/settings/user_data"><i ><FontAwesomeIcon icon={faCog} /></i></Link></li>
          {/* This one temporarily leads to index page */}
          <li><Link onClick={logout}><i><FontAwesomeIcon icon={faSignOutAlt} /></i></Link></li>
      </ul>
    )
  
  const registerLinks = (
      <ul className="flex-center-row">
      <li><Link to='/register'>Sing Up</Link></li>
       <li><Link to="/login">Sign In</Link></li>
      
   </ul>
    )
    // const {auth: {isAuthenticated, loading}, logout}
    return (
      <div className="flex-center-row secondary-nav">
      {/* Fix func */}
    <h2><span className="logo title">Tasks Manager</span> | {this.props.navTitle}</h2>
   {!loading && (<React.Fragment>{isAuthenticated ? authLinks : registerLinks}</React.Fragment>)}
</div> 
    )
  }
}

SecondaryNav.propTypes = {
  logout: propTypes.func.isRequired,
  auth: propTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})
export default connect(mapStateToProps, {logout})(SecondaryNav);
