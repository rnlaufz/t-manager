import React, { useEffect } from 'react'
import {v4 as uuid} from 'uuid'

import propTypes from 'prop-types'

import Task from "./Task"
import { connect } from 'react-redux'
import {setNavTitle} from '../actions/navTitle'
import {getTasks} from "../actions/tasks"



const Tasks = ({getTasks, auth, tasks}, props) => {
    useEffect(() => {
        setNavTitle("Dashboard");
        getTasks();
    }, []); 
    const tasksObj = tasks.tasks;
    return ( <React.Fragment>
               
    <div className="tasks-list-container">
    <h3>My Tasks:</h3>
    <ul className="tasks-list">
            {tasksObj.map((task) => (
                <Task id={uuid()} key={uuid()} task={task} deleteTask={props.deleteTask} markCompleted={props.markCompleted} />
            ))}
                </ul>
            </div>    

        </React.Fragment>)
}


// export class Tasks extends Component {
//   componentDidMount(){
//      this.props.setNavTitle("Dashboard");
//   }

//     render() {
        
//         return (
//             <React.Fragment>
               
//         <div className="tasks-list-container">
//         <h3>My Tasks:</h3>
//         <ul className="tasks-list">
//                 {this.props.tasks.map((task) => (
//                     <Task key={task.id} task={task} deleteTask={this.props.deleteTask} markCompleted={this.props.markCompleted} 
//                     />
//                 ))}
//                     </ul>
//                 </div>    

//             </React.Fragment>
//         )
//     }
// }

// Prop types
Tasks.propTypes = {
    tasks: propTypes.array.isRequired,
    setNavTitle: propTypes.func.isRequired,
    getTasks: propTypes.func.isRequired,
    tasks: propTypes.object.isRequired,
}

const mapStateToProps = state => ({
    navTitle: state.navTitle.title,
    tasks: state.tasks 
})

export default connect(mapStateToProps, {setNavTitle, getTasks})(Tasks)
