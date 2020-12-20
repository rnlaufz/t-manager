import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import propTypes from 'prop-types'

import Category from "./Category"



export class Categories extends Component {

    state = {
        categoryTitle: ''
    }

    onSubmit = (e) => {
      e.preventDefault();  
        this.props.addCategory(this.state.categoryTitle);
        this.setState({categoryTitle: ''})  
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });   
    }

    render() {
        return (
            <React.Fragment>
                 <div className="my-categories">
            <h3>My categories:</h3>
            <ul>
                {this.props.categories.map((category) => (
                    <Category key={category.id} category={category} deleteCategory={this.props.deleteCategory}  />
                ))}
                    
            </ul>
        </div>
        <div className="form-container">
            <form onSubmit={this.onSubmit} className="add-categories">
                <div>
                    <label htmlFor="category" className="block">Create new category:</label>
                    <input id="category" name="categoryTitle" type="text" className="form-control no-focus"  value={this.state.categoryTitle}    onChange={this.onChange} />
                </div>
               
                <div>
                    <button className="form-control no-focus btn" type="submit">Add new category</button>
                </div>
            </form>
        </div>
            </React.Fragment>
        )
    }
}

// Prop types
Categories.propTypes = {
    categories: propTypes.array.isRequired
}
export default Categories
