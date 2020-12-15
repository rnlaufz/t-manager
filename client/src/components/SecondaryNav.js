import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import {logout} from '../actions/auth';


// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCog, faPlus, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';


// @TO_DO change component to class based

export class SecondaryNav extends Component {

  constructor({auth: {isAuthenticated, loading}, logout}){
    super() 
      this.isAuthenticated = isAuthenticated;
      this.loading = loading;
      this.logout = logout
      
    
  }

  render() {
    const authLinks = (
      <ul className="flex-center-row">
         <li><Link to='/new_task'><i><FontAwesomeIcon icon={faPlus} /></i></Link></li>
          <li><Link to="/settings/user_data"><i ><FontAwesomeIcon icon={faCog} /></i></Link></li>
          {/* This one temporarily leads to index page */}
          <li><button onClick={this.logout}><i><FontAwesomeIcon icon={faSignOutAlt} /></i></button></li>
      </ul>
    )
  
  const registerLinks = (
      <ul className="flex-center-row">
      <li><Link to='/register'>Sing Up</Link></li>
       <li><Link to="/login">Sign In</Link></li>
      
   </ul>
    )
 
    return (
      <div className="flex-center-row secondary-nav">
      {/* Fix func */}
    <h2><span className="logo title">Tasks Manager</span> | {this.props.navTitle}</h2>
   {!this.loading && (<React.Fragment>{this.isAuthenticated ? authLinks : registerLinks}</React.Fragment>)}
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
