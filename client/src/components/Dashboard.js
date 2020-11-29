import React from 'react';



export class Dashboard extends React.Component {

  render() {
    return (
      <div className="flex-center-column dashboard">
    {this.props.children}
    </div>
    )
  }
}

export default Dashboard
