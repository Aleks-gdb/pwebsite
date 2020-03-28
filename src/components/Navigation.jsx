import React, { Component } from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import classNames from 'classnames/bind';
import AnchorLink from "react-anchor-link-smooth-scroll";
import "../App.css";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Nav className={classNames('justify-content-end', 'fixed-top')}>
          <Nav.Item>
            <Nav.Link href="#header">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
