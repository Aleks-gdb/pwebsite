import React, { Component } from "react";
import {Nav} from "react-bootstrap";
/*The navigation component used for when there is no user logged in to the system*/
export default class Navigation extends Component {
  render() {
    return (
        <Nav variant="tabs" defaultActiveKey="/">
        <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey=".about">About</Nav.Link>
        </Nav.Item>
        </Nav>
    );
  }
}
