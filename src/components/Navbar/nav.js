import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { BrowserRouter } from 'react-router-dom';


class Navigation extends Component {

  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return(
      <div>
        <BrowserRouter>
          <Navbar dark color="dark" expand="md">
              <div className="container">
                  <NavbarToggler onClick={this.toggleNav} />
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                      <Nav navbar>
                      <NavItem>
                          <NavLink className="nav-link"  to='/form'><span className="fa fa-sign-in fa-lg"></span> Login</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink className="nav-link" to='/sign up'><span className="fa fa-user-plus fa-lg"></span> Sign Up</NavLink>
                      </NavItem>
                      
                      </Nav>
                  </Collapse>
                  <NavbarBrand className="mr-auto" href="/"><img src='VideoPlatform.png' alt='Video Platform Logo' height="45" width="120"  /></NavbarBrand>
                  class=""
              </div>
          </Navbar>
         
        </BrowserRouter>
      </div>  

    );
  }
}

export default Navigation;