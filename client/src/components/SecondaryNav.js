import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {logout} from '../actions/auth';
import {setNavTitle} from '../actions/navTitle'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCog, faPlus, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';



// @TO_DO change component to class base

const SecondaryNav = ({auth: {isAuthenticated, loading}, navTitle: {navTitle}, logout, props}) => {
  const authLinks = (
    <ul className="flex-center-row">
       <li><Link to='/new_task'><i><FontAwesomeIcon icon={faPlus} /></i></Link></li>
        <li><Link to="/settings/user_data"><i ><FontAwesomeIcon icon={faCog} /></i></Link></li>
        {/* This one temporarily leads to index page */}
        <li><a href="#!" onClick={logout}><i><FontAwesomeIcon icon={faSignOutAlt} /></i></a></li>
    </ul>
  )


const registerLinks = (
    <ul className="flex-center-row">
    <li><Link to='/register'>Sign Up</Link></li>
     <li><Link to="/login">Sign In</Link></li>
    
 </ul>
  )
  return (
    <div className="flex-center-row secondary-nav">
    {/* Fix func */}
  <h2> <Link to={isAuthenticated ? "/dashboard" : "/login"} className="logo title"> T-manager </Link> | {navTitle}</h2>
 <React.Fragment>{ isAuthenticated ? authLinks : !isAuthenticated ? registerLinks : null}</React.Fragment>
</div> 
  )
}

SecondaryNav.propTypes = {
  logout: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
  navTitle: propTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  navTitle: state.navTitle
})
export default connect(mapStateToProps, {logout, setNavTitle})(SecondaryNav);
