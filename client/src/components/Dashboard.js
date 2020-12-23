import React from 'react';
import propTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {v4 as uuid} from "uuid";

// Import components
import SecondaryNav from './SecondaryNav';
import MainNav from './MainNav';
import AddForm from './AddForm';
import EditForm from './EditForm';
import CompletedTasks from './CompletedTasks';
import Footer from './Footer';
import Settings from '../pages/settings_page/Settings';
import SettingsUserData from '../pages/settings_page/SettingsUserData';
import SettingsAccount from '../pages/settings_page/SettingsAccount';
import Tasks from './Tasks';




export class Dashboard extends React.Component {


  constructor(){
    super()
    this.state = {
      isAuthenticated: false,
      // Temporary todo list before databse
      tasks: [
        {
          // @TO_DO Add random id generation
          id: uuid(),
          title: "Walk the dog",
          urgent: false,
          completed: true
          // @TO_DO Add category and completion status
        },
        {
          // @TO_DO Add random id generation
          id: uuid(),
          title: "Wash the dishes",
          urgent: true,
          completed: false
          // @TO_DO Add category and completion status
        },
        {
          // @TO_DO Add random id generation
          id: uuid(),
          title: "Cook dinner",
          urgent: false,
          completed: false
          // @TO_DO Add category and completion status
        },
        {
          // @TO_DO Add random id generation
          id: uuid(),
          title: "Clean up",
          urgent: false,
          completed: false
          // @TO_DO Add category and completion status
        }
      ],

      // Navigation Links
      dashLinks: [
        {
          key: uuid(),
          linkTitle: "My Tasks",
          linkPath: "/dashboard"
        },
        {
          key: uuid(),
          linkTitle: "Completed",
          linkPath: "/dashboard/completed"
        }
      ],
      settLinks: [
        {
          key: uuid(),
          linkTitle: "User",
          linkPath: "/settings/user_data"
        },
        {
          key: uuid(),
          linkTitle: "Account",
          linkPath: "/settings/user_account"
        },
        {
          key: uuid(),
          linkTitle: "Dashboard",
          linkPath: "/dashboard"
        }
      ],
      // categories: [
      //   {
      //     id: uuid(),
      //     categoryTitle: "Home"
      //   },
      //   {
      //     id: uuid(),
      //     categoryTitle: "Hobby"
      //   },
      //   {
      //     id: uuid(),
      //     categoryTitle: "Work"
      //   }
      // ],
      navTitle: "Dashboard"
    }
  }




  // Update navigtion title 
  updateNav = (newTitle) => {
    this.setState({navTitle: newTitle})
    
  }

  

  // Add task
  addTask = (title, urgent) => {
    const newTask = {
      id: uuid(),
      title,
      urgent
    }
    this.setState({tasks: [...this.state.tasks, newTask]});
  }

  // Mark task completed
  markCompleted = (id) => {
    this.setState({tasks: this.state.tasks.map(task => {
      if(task.id === id){
        task.completed = !task.completed 
      }
      return task
    })});
}

// @TO_DO after db connection: editTask

 

  // Delete task
  deleteTask = (id, e) => {
    e.preventDefault()
    this.setState({tasks: [...this.state.tasks.filter(task => task.id !== id)]});
    
  }

  render() {
    return (
      <div className="flex-center-column dashboard">
        <Route exact path='/dashboard' render={props => (
          <Tasks updateNav={this.updateNav}  tasks = {this.state.tasks} deleteTask={this.deleteTask} markCompleted={this.markCompleted} />   
        )} />
        <Route exact path="/dashboard/new_task" render={props => (
                
                 <AddForm updateNav={this.updateNav}  addTask = { this.addTask}  />
                
               )} />
         <Route exact path="/dashboard/edit_task" render={props => (
                    <EditForm updateNav={this.updateNav} />
              )} />    

            <Route exact path="/dashboard/completed" render={props => (
                      <CompletedTasks updateNav={this.updateNav}  tasks = {this.state.tasks} />
                   
                 )} /> 
               <Route exact path="/settings/user_data" render={props => (
                   <Settings updateNav={this.updateNav}>
                    <SettingsUserData />
                      </Settings>
                  
               )} />  
                  <Route exact path="/settings/user_account" render={props => (
              
                     <Settings updateNav={this.updateNav}>
                      <SettingsAccount   />
                      </Settings>
                    
                )} />        
    </div>
    )
  }
}

// const Dashboard = props => {
//   return(
//     <div className="flex-center-column dashboard">
//    {props.children}
//     </div>
//   )
// } 

export default Dashboard




