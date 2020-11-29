import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

export class Category extends Component {
    render() {
        const {id} = this.props.category;
        return (
           
               <li className="task"> <p className="list-item-control">{this.props.category.categoryTitle}</p> <a onClick={this.props.deleteCategory.bind(this, id)}  className="delete"><i><FontAwesomeIcon icon={faTrash} /></i></a></li> 
           
        )
    }
}

// Prop types
Category.propTypes = {
    category: PropTypes.object.isRequired
}


export default Category
