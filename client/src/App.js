import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {v4 as uuid} from "uuid";

// Redux
import {Provider} from 'react-redux';
import store from './store'


// Import components
import SecondaryNav from './components/SecondaryNav'
import MainNav from './components/MainNav'
import Dashboard from './components/Dashboard'
import PrivateRoute from './components/routing/PrivateRoute'
import AddForm from './components/AddForm'
import EditForm from './components/EditForm'
import CompletedTasks from './components/CompletedTasks'

// Removed
// import Categories from './components/Categories'


import Footer from './components/Footer'
import Settings from './pages/settings_page/Settings'
import SettingsUserData from './pages/settings_page/SettingsUserData'
import SettingsAccount from './pages/settings_page/SettingsAccount';

import Tasks from './components/Tasks'


import Register from './pages/Register'
import Login from './pages/Login'

import {loadUser} from './actions/auth'
import setAuthToken from './utils/setAuthToken'

import './index.css';
import Alert from './components/Alert';



export class App extends React.Component {

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


componentDidMount(){
  store.dispatch(loadUser())
}


  // Rendering application
  render() {
    if(localStorage.token){
      setAuthToken(localStorage.token);
  }
    return (      
    <Provider store={store}> 
      <Router>
        <div className="container">
          <SecondaryNav navTitle={this.state.navTitle} />
          <div className="wrapper">
          <Route exact path="/" component={Register} />
            <Alert />
            <Switch>
            <Route exact path="/login" render={props =>(<Login navTitle={this.state.navTitle} />)}/>
            <Route exact path="/register" render={props =>(<Register navTitle={this.state.navTitle} /> )}/>
            <Route exact path="/dashboard" render={props => (
              <React.Fragment>
              <MainNav links={this.state.dashLinks} />
                     <Dashboard>
                        <Tasks updateNav={this.updateNav}  tasks = {this.state.tasks} deleteTask={this.deleteTask} markCompleted={this.markCompleted} />
                   </Dashboard>
              </React.Fragment>
            )} />
             <Route exact path="/dashboard/new_task" render={props => (
                <React.Fragment>
                   <MainNav links={this.state.dashLinks} />
                   <Dashboard>
                 <AddForm updateNav={this.updateNav}  addTask = { this.addTask}  />
                  </Dashboard>
                  </React.Fragment>
               )} />
               <Route exact path="/dashboard/edit_task" render={props => (
                    <React.Fragment>
                      <MainNav links={this.state.dashLinks} />
                     <Dashboard>
                    <EditForm updateNav={this.updateNav} />
                  </Dashboard>
                   </React.Fragment>
              )} />
             <Route exact path="/dashboard/completed" render={props => (
              <React.Fragment>
                 <MainNav links={this.state.dashLinks} />
                <Dashboard>
                      <CompletedTasks updateNav={this.updateNav}  tasks = {this.state.tasks} />
                    </Dashboard>
                     </React.Fragment> 
                 )} />
              <Route exact path="/settings/user_data" render={props => (
            <React.Fragment>
                 <MainNav links={this.state.settLinks} />
                      <Dashboard>
                   <Settings updateNav={this.updateNav}>
                    <SettingsUserData />
                      </Settings>
                   </Dashboard>
                   </React.Fragment>
               )} />
                <Route exact path="/settings/user_account" render={props => (
               <React.Fragment>
                   <MainNav links={this.state.settLinks} />
                   <Dashboard>
                     <Settings updateNav={this.updateNav}>
                      <SettingsAccount   />
                      </Settings>
                    </Dashboard>
                    </React.Fragment>
                )} />

            </Switch>
          </div>
          <Footer />
        </div>
        </Router>
    </Provider> 


    )
  }
}



export default App;
