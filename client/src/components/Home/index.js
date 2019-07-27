import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import Logout from "../Logout";

export default class Home extends Component {
  

  render() {
    // const isAuthenticated = window.localStorage.getItem("isAuthenticated");

    // if (!isAuthenticated) {
    //   return <Redirect to="/login" />
    // }

    //JSX
    return (
      <div>
        <h1>I am the Home Component</h1>
        <Logout />
      </div>
    );
  }
}