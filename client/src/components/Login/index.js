import React, { Component } from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";



export default class Home extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: ""
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    axios({
      url: "/authentication/signin",
      method: "POST",
      data: {
        email,
        password
      }
    })
    .then((response) => {
      const isAuthenticated = response.data.isAuthenticated;
      window.localStorage.setItem("isAuthenticated", isAuthenticated); //save to local storage
      this.props.history.push("/profile");
    })
    .catch((error) => {
      this.setState({
        errorMessage: error.response.data.message
      });
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };





  render() {
    const isAuthenticated = window.localStorage.getItem("isAuthenticated");

     if(isAuthenticated) {
      return <Redirect to = "/profile" />
    }

    


    //JSX
    return (
      <div>
        <h2>Home Component</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="email" onChange={this.handleChange} />
          <input type="password" name="password" onChange={this.handleChange} />

          <button>Login</button>
          <button onClick={() => {this.props.history.push("/signup")}}>Sign Up</button>
        </form>
        <p>{this.state.errorMessage}</p>
      </div>
    );
  }
}