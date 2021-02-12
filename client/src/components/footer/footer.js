import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FaFacebook} from 'react-icons/fa';
import { FaInstagram} from 'react-icons/fa';
import { FaTwitter} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import "./footer.css";

function Footer() {
    return (
        <MDBFooter className="pt-4 mt-4 footer">
        <MDBContainer fluid className="text-center text-md-center">
          <MDBRow>
            <MDBCol md="6" className="socialMedia">
              <h1 className="icons">
                  <a href="facebook.com">
              <FaFacebook/>
                  </a>
                  <a href="instagram.com">
                  <FaInstagram/>
                  </a>
                  <a href="twitter.com">
                  <FaTwitter/>
                  </a>
              </h1>
            </MDBCol>
            <MDBCol md="6" className="footerLinks">
              <h5 className="title">quick links</h5>
              <ul>
                <li className="list-unstyled">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-unstyled">
                  <Link to="/food">Food</Link>
                </li>
                <li className="list-unstyled">
                  <Link to="/order">Order</Link>
                </li>
                <li className="list-unstyled">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="list-unstyled">
                  <Link to="/location">Location</Link>
                </li>
                <li className="list-unstyled">
                  <Link to="/events">Private Events</Link>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} torched
            <br/>
            Design by Vanessa Orellana
          </MDBContainer>
        </div>
      </MDBFooter>
    )
}

export default Footer;