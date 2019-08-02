import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import Logout from "../Logout";
import Modal from "../Modal";

export default class Home extends Component {
  

  render() {
    // const isAuthenticated = window.localStorage.getItem("isAuthenticated");

    // if (!isAuthenticated) {
    //   return <Redirect to="/login" />
    // }

    //JSX
    return (
      <div>
        <a href="/candidatetest" class="active">test</a>

        <h1>I am the Home Component</h1>
        <Modal />
        <Logout />
      </div>
    );
  }
}