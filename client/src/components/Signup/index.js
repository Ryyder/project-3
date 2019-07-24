import React, { Component } from "react";
import axios from "axios";

export default class Signup extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: ""
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    axios({
      url: "/authentication/signup",
      method: "POST",
      data: {
        email,
        password
      }
    })
    .then((response) => {
      const isAuthenticated = response.data.isAuthenticated;
      window.localStorage.setItem("isAuthenticated", isAuthenticated);
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



    //JSX
    return (
      <div>
        <h2>Signup Component</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="email" name="email" onChange={this.handleChange} />
          <input type="password" name="password" onChange={this.handleChange} />

          <button>Signup</button>
          <button onClick={() => {this.props.history.push("/")}}>Cancel</button>
        </form>
        <p>{this.state.errorMessage}</p>
      </div>
    );
  }
}