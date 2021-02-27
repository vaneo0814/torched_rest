import React from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';


import './nav.css';

import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

// class Navigation extends React.Component {

//   render() {
    // return (
    //   <div>
    //     <Navbar collapseOnSelect expand="lg" className="nav">
    //       <Navbar.Brand href="/">
    //         <h1 className="restName">
    //           torched
    //         </h1>
    //       </Navbar.Brand>
    //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //       <Navbar.Collapse id="responsive-navbar-nav">
    //         <Nav className="mr-auto">
      
    //         </Nav>
    //         <Nav className="restLinks">
    //           <NavDropdown title="About" id="collasible-nav-dropdown">
    //             <NavDropdown.Item href="/about">About</NavDropdown.Item>
    //             <NavDropdown.Item href="/careers">Careers</NavDropdown.Item>
    //             <NavDropdown.Divider />
    //             <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
    //           </NavDropdown>
    //           <Nav.Link href="/chefs">Chefs</Nav.Link>
    //           <Nav.Link href="/food">Food</Nav.Link>
    //           <Nav.Link href="/events">Private Events</Nav.Link>
    //           <Nav.Link href="/safety">Safety</Nav.Link>
    //           <Nav.Link href="/location">Location</Nav.Link>
    //           <Nav.Link href="/order">Order</Nav.Link>
    //           <Nav.Link href="/cart"><FontAwesomeIcon icon={faShoppingBag}/></Nav.Link>
    //         </Nav>
    //       </Navbar.Collapse>
    //     </Navbar>
    //   </div>
    // )
//   }
// }

class Navigation extends React.Component {
  listener = null;
  state = {
    nav:false
  }
  componentDidMount() {
     window.addEventListener("scroll", this.handleScroll);
   }

   handleScroll= () => {
     if (window.pageYOffset > 140) {
         if(!this.state.nav){
           this.setState({ nav: true });
         }
     }else{
         if(this.state.nav){
           this.setState({ nav: false });
         }
     }

   }

  render(){
  return (
    <div>
    <div className={`Nav ${this.state.nav && 'Nav__black'}`}>
    <Navbar collapseOnSelect expand="lg" className="nav">
      <Navbar.Brand href="/">
        <h1 className="restName">
          torched
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
  
        </Nav>
        <Nav className="restLinks">
          <NavDropdown title="About" id="collasible-nav-dropdown">
            <NavDropdown.Item className="hello" href="/about">About</NavDropdown.Item>
            <NavDropdown.Item href="/careers">Careers</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/contact">Contact</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/chefs">Chefs</Nav.Link>
          <Nav.Link href="/menu">Menu</Nav.Link>

          {/* this edit menu needs to have firebase authentication */}
          <Nav.Link href="/employeemenu">Edit Menu</Nav.Link>
          <Nav.Link href="/events">Private Events</Nav.Link>
          <Nav.Link href="/safety">Safety</Nav.Link>
          <Nav.Link href="/location">Location</Nav.Link>
          <Nav.Link href="/order">Order</Nav.Link>
          <Nav.Link href="/cart"><FontAwesomeIcon icon={faShoppingBag}/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
    </div>
  );}
}
export default Navigation;

