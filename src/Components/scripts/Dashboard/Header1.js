import React, {useState} from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  import {Link} from 'react-router-dom';
  
  const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Admin Panel</NavbarBrand>
          <NavbarToggler onClick={toggle} />
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
                <button className="btn btn-success">Logout</button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default Example;
