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
import AddForm from './components/AddForm'
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

            {/* Protefcted Route */}
            {/* <PrivateRoute exact path="/dashboard" component={(props) => <Dashboard {...props.children} />} /> */}

            <Route exact path="/dashboard" render={props => (
            <Dashboard>
              {props.children}
              </Dashboard>
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
