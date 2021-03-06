import React, { Component } from 'react';
import {onLogout} from './../../Redux/Authentication/AuthAction';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';
  import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isOpen:false
        }
    }
    onLogoutClick=()=>{
       // console.log("1245");
        this.props.onLogout(this.props.history);
    }
  
    toggle = () => {this.setState({isOpen:!this.state.isOpen})};
    render() {
        const {isOpen}= this.state;
        return (
            <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Admin Panel</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/add-category">Add Category</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/view-category">View Category</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/add-product">Add Product</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/view-product">View Product</Link>
              </NavItem>
              <NavItem>
                <button className="btn btn-success" onClick={this.onLogoutClick}>Logout</button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

        )
    }
}

export default connect(null, {onLogout})(withRouter(Header));
