import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import propTypes from 'prop-types';


const PrivateRoute = ({component: Component, auth: {isAuthenticated, loading}, ...rest}) => (
    <Route {...rest} render={props => !isAuthenticated && !loading  ? (<Redirect to="/login" />): (<Component {...props} />)} />
)
PrivateRoute.propTypes = {
      auth: propTypes.object.isRequired,
      isAuthenticated: propTypes.bool.isRequired,
      loading: propTypes.bool.isRequired
  }

  const mapStateToProps = state => ({
      auth: state.auth,
      isAuthenticated: state.auth.isAuthenticated,
      loading: state.auth.loading
  })
  
  export default connect(mapStateToProps)(PrivateRoute)