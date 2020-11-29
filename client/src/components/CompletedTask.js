import React, { Component } from 'react'

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExclamationCircle} from '@fortawesome/free-solid-svg-icons';

export class CompletedTask extends Component {
    render() {
        return (
            <li className="task"> <p className="list-item-control">{this.props.task.title} {this.props.task.urgent ? <small className="urgent"><FontAwesomeIcon icon={faExclamationCircle} /></small> : null}</p>
            </li>
        )
    }
}

export default CompletedTask
