import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Registration from './Components/scripts/Authentication/Registration';
import Login from './Components/scripts/Authentication/Login';
import store from './store';
import {Provider} from 'react-redux';
import PrivateRoute from './Components/reUsable/PrivateRoute'
import Dashboard from './Components/scripts/Dashboard/Dashboard'
import PageNotFound from './Components/scripts/PageNotFound'
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
      <Route exact path="/" component={Registration}/>
      <Route exact path="/login" component={Login}/>
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      <Route exact path="/404" component={PageNotFound}/>
      <Redirect to="/404"/>
      </Switch>
    </Router>
   </Provider>
  );
}

export default App;
