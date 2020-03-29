import React, { Component } from "react";
import {Nav} from "react-bootstrap";
import classNames from 'classnames/bind';
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
            <Nav.Link href="#about">About Me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#github">GitHub</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}
