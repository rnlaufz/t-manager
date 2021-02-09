import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {v4 as uuid} from "uuid";

// Redux
import {Provider} from 'react-redux';
import store from './store';
import PrivateRoute from './components/routing/PrivateRoute'

// Import css
import './index.css';

// Import components
import Dashboard from './components/Dashboard';


import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
import CompletedTasks from './components/CompletedTasks';
import MainNav from './components/MainNav';

import Settings from './pages/settings_page/Settings';
import SettingsUserData from './pages/settings_page/SettingsUserData';
import SettingsAccount from './pages/settings_page/SettingsAccount';
import Tasks from './components/Tasks';

import SecondaryNav from './components/SecondaryNav';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';

import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';




export class App extends React.Component {
 
  constructor(){
    super()
    this.state = {
      isSignedIn: true,
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
          linkPath: "/completed"
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
          linkPath: "/settings/manage_account"
        },
        {
          key: uuid(),
          linkTitle: "Dashboard",
          linkPath: "/dashboard"
        }
      ],
     
    }
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
          <SecondaryNav />
          <div className="wrapper">
          <Route exact path="/" render={props =>(<Register /> )} />
            <Switch>
            <Route exact path="/login" render={props =>(<Login  />)}/>
            <Route exact path="/register" render={props =>(<Register  /> )}/>
            
            {/* @TO_DO rebuild componet structure */}

            {/* Protefcted Route */}
            <PrivateRoute exact path="/dashboard" component={(props) => 
            <React.Fragment>
                 <MainNav links={this.state.dashLinks} />
              <Dashboard>
              <Tasks  tasks = {this.state.tasks} deleteTask={this.deleteTask} markCompleted={this.markCompleted} />
              </Dashboard>
              </React.Fragment>
            
              } />
            <PrivateRoute exact path="/new_task" component={(props) =>
              <React.Fragment>
                  <MainNav links={this.state.dashLinks} />
              <Dashboard>
              <AddForm  addTask = { this.addTask} updateNav={this.updateNav} />
              </Dashboard>
                </React.Fragment>
             
              } />
            <PrivateRoute exact path="/edit_task" component={(props) => 
            <React.Fragment>
               <MainNav links={this.state.dashLinks} />
            <Dashboard>
              <EditForm/>
              </Dashboard>
              </React.Fragment>
           
              } />
            <PrivateRoute exact path="/completed" component={(props) => 
             <React.Fragment>
                 <MainNav links={this.state.dashLinks} />
                 <Dashboard>
            <CompletedTasks tasks = {this.state.tasks} />
            </Dashboard>
             </React.Fragment>
           
              } />

              {/* Settings */}

              <PrivateRoute exact path="/settings/user_data" component={(props) => 
               <React.Fragment>
                  <MainNav links={this.state.settLinks} />
                  <Dashboard>
              <Settings >
              <SettingsUserData />
              </Settings>
              </Dashboard>
               </React.Fragment>
             
              } />
              <PrivateRoute exact path="/settings/manage_account" component={(props) => 
               <React.Fragment>
                    <MainNav links={this.state.settLinks} />
                    <Dashboard>
              <Settings>
              <SettingsAccount   />
              </Settings>
              </Dashboard>
               </React.Fragment>
           
              } />
           
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



