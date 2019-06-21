import React, { Component } from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import AnchorLink from "react-anchor-link-smooth-scroll";
/*The navigation component used for when there is no user logged in to the system*/
export default class Navigation extends Component {
  render() {
    return (
        <Navbar collapseOnSelect fixedTop>
        <Navbar.Collapse>
          <Nav className="pull-right">
            <NavItem className="item" eventKey={0}>
              <AnchorLink offset="125" href=".nameheader">
                <p>Home</p>
              </AnchorLink>
            </NavItem>
            <NavItem className="item" eventKey={1}>
              <AnchorLink offset="180" href=".about">
                <p>About</p>
              </AnchorLink>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
