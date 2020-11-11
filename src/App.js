import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Redirect, Switch, withRouter} from 'react-router-dom';
import Registration from './Components/scripts/Authentication/Registration';
import Login from './Components/scripts/Authentication/Login';
import store from './store';
import {Provider} from 'react-redux';
import PrivateRoute from './Components/reUsable/PrivateRoute'
import Dashboard from './Components/scripts/Dashboard/Dashboard'
import PageNotFound from './Components/scripts/PageNotFound'
import jwtDecode from 'jwt-decode';
import {onLoginSuccess} from './Components/Redux/Authentication/AuthAction';
import PublicRoute from './Components/reUsable/PublicRoute';
import setAuthToken from './Components/utils/setAuthToken';
import AddCategory from './Components/scripts/Dashboard/Category/AddCategory'
import Category from './Components/scripts/Dashboard/Category/Category'
import AddProduct from './Components/scripts/Dashboard/Product/AddProduct'
import Product from './Components/scripts/Dashboard/Product/Product'
import Header from './Components/scripts/Dashboard/Header'
import EditCategory from './Components/scripts/Dashboard/Category/EditCategory';
function App() {

  const token=localStorage.getItem("user");
  if(token){
    setAuthToken(token);
    const decoded=jwtDecode(token);
    store.dispatch(onLoginSuccess(decoded))
  }

  const Main=withRouter(({location})=>{
    return (
      <div>
          {location.pathname!="/" && location.pathname!="/login" && <Header/>}
          <Switch>
      <PublicRoute exact path="/" component={Registration}/>
      <PublicRoute exact path="/login" component={Login}/>
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      <PrivateRoute exact path="/add-category" component={AddCategory}/>
      <PrivateRoute exact path="/view-category" component={Category}/>
      <PrivateRoute exact path="/add-product" component={AddProduct}/>
      <PrivateRoute exact path="/view-product" component={Product}/>
      <PrivateRoute exact path="/edit-category/:id" component={EditCategory}></PrivateRoute>
      <Route exact path="/404" component={PageNotFound}/>
      <Redirect to="/404"/>
      </Switch>
      </div>
    )
  })
  
  return (
    <Provider store={store}>
    <Router>
      <Main></Main>
    </Router>
   </Provider>
  );
}

export default App;
