import React from 'react';
import propTypes from 'prop-types';

const Dashboard = props => {
  return(
    <div className="flex-center-column dashboard">
   {props.children}
    </div>
  )
} 

export default Dashboard




