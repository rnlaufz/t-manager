import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {v4 as uuid} from "uuid";
import propTypes from 'prop-types';
// Redux
import {Provider} from 'react-redux';
import store from './store';
import PrivateRoute from './components/routing/PrivateRoute'

// Import css
import './index.css';

// Import components
import Dashboard from './components/Dashboard';

import SecondaryNav from './components/SecondaryNav';
import MainNav from './components/MainNav';
import Footer from './components/Footer';
import Register from './pages/Register';
import Login from './pages/Login';

import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';


import Alert from './components/Alert';

export class App extends React.Component {

  constructor(){
    super()
    this.state = {
      isAuthenticated: false,
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
   navTitle: "Dashboard"
    }
  }
  // Update navigtion title 
  updateNav = (newTitle) => {
    this.setState({navTitle: newTitle})
    
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
          <Route exact path="/" render={props =>(<Register navTitle={this.state.navTitle} /> )} />
            <Alert />
            <Switch>
            <Route exact path="/login" render={props =>(<Login navTitle={this.state.navTitle} />)}/>
            <Route exact path="/register" render={props =>(<Register navTitle={this.state.navTitle} /> )}/>
            
            {/* @TO_DO rebuild componet structure */}

            <PrivateRoute exact path="/dashboard" component={MainNav, Dashboard} />

            {/* <Route exact path="/dashboard" render={props => (
              <React.Fragment>
              <MainNav links={this.state.dashLinks} />
                     <Dashboard/>   
              </React.Fragment>
            )} /> */}
             {/* <Route exact path="/dashboard/new_task" render={props => (
                <React.Fragment>
                   <MainNav links={this.state.dashLinks} />
                   <Dashboard />
                  </React.Fragment>
               )} />
               <Route exact path="/dashboard/edit_task" render={props => (
                    <React.Fragment>
                      <MainNav links={this.state.dashLinks} />
                     <Dashboard />
                   </React.Fragment>
              )} />
             <Route exact path="/dashboard/completed" render={props => (
              
              <React.Fragment>
              <MainNav links={this.state.dashLinks} />
             <Dashboard />
           </React.Fragment>
                     
                 )} />

                 {/* @TO_DO Move to Dashboard */}
              {/* <Route exact path="/settings/user_data" render={props => (
            <React.Fragment>
                 <MainNav links={this.state.settLinks} />
                      <Dashboard />
                   
                   </React.Fragment>
               )} />
                <Route exact path="/settings/user_account" render={props => (
               <React.Fragment>
                   <MainNav links={this.state.settLinks} />
                   <Dashboard/>
                     
                    </React.Fragment>
                )} /> */} 

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
