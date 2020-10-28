import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Registration from './Components/scripts/Authentication/Registration';
import Login from './Components/scripts/Authentication/Login';
import store from './store';
import {Provider} from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Route exact path="/" component={Registration}/>
      <Route exact path="/login" component={Login}/>
    </Router>
   </Provider>
  );
}

export default App;
