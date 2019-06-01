import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>          
        <div style={{width:"100%"}}>
          <Route exact path="/" component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}
