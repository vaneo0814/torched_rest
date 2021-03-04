import React from 'react';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import './nav.css';

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
            <NavDropdown.Divider />
            <NavDropdown.Item className="hello" href="/contact">Contact</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/chefs">Chefs</Nav.Link>
          <Nav.Link href="/menu">Menu</Nav.Link>
          {/* this edit menu needs to have firebase authentication */}
          <Nav.Link href="/employeemenu">Edit Menu</Nav.Link>
          <Nav.Link href="/events">Private Events</Nav.Link>
          <Nav.Link href="/safety">Safety</Nav.Link>
          <Nav.Link href="/location">Location</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
    </div>
  );}
}
export default Navigation;

