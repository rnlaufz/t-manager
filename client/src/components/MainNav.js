import React from 'react';
import {Link} from 'react-router-dom'



export class MainNav extends React.Component {

  render() {
    return (
      <nav className="main-nav" >
         <ul>
            {this.props.links.map((link )=> (
             <li key={link.key}> <Link  to={link.linkPath}>{link.linkTitle}</Link> </li>
            ))}
        </ul>
    </nav>
    )
  }
}

export default MainNav
