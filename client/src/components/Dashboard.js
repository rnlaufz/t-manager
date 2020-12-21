import React from 'react';
import propTypes from 'prop-types';

// export class Dashboard extends React.Component {

//   render() {
//     return (
//       <div className="flex-center-column dashboard">
//     {this.props.children}
//     </div>
//     )
//   }
// }

const Dashboard = props => {
  return(
    <div className="flex-center-column dashboard">
   {props.children}
    </div>
  )
} 

export default Dashboard




