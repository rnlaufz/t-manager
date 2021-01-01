import React, { Component } from 'react'
import CompletedTask from './CompletedTask'
import { connect } from 'react-redux';
import propTypes from 'prop-types'
import {setNavTitle} from '../actions/navTitle';


// @TO_DO: add clear all button

export class CompletedTasks extends Component {

    state = {
        noTasks: false
    }
    componentDidMount(){
        this.props.setNavTitle("Completed");
     }


    noTasks = () => {
        this.setState({
            noTasks: true
        })
    }

//    @TO_DO finish if any completed check
    render() {
       
        return (
            <React.Fragment>
               
        <div className="tasks-list-container">
        <h3>Completed tasks:</h3>
        <ul className="tasks-list" >
            {this.state.noTasks ? <h3>No completed tasks</h3> : null }
                {this.props.tasks.map((task) => (
                    task.completed ? <CompletedTask key={task.id} task={task}/> : null
                ))}
               
                    </ul>
                </div>    

            </React.Fragment>
        )
    }
}

CompletedTasks.propTypes = {
    setNavTitle: propTypes.func.isRequired
}

const mapStateToProps = state => ({
    navTitle: state.navTitle.title
})

export default connect(mapStateToProps, {setNavTitle})(CompletedTasks)
