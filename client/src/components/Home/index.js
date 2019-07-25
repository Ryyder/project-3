import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import logo from '../../united-states.png';



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
        this.props.history.push("/accordion");
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

    if (isAuthenticated) {
      return <Redirect to="/accordion" />
    }




    //JSX
    return (
      <div>
        <div className="container">
          <div id="authLogo" className="row">
            <div className="col s12">
              <img src={logo} height="200" />
              <h2>RE:DEM</h2>
            </div>
          </div>
          <div className="row">
            <div className="col s4"></div>
            <div className="col s4">
              <form onSubmit={this.handleSubmit}>
                <label for="email">Email Address</label>

                <input type="email" name="email" onChange={this.handleChange} />
                <label for="password">Password</label>

                <input type="password" name="password" onChange={this.handleChange} />

                <button>Login</button>
                <button onClick={() => { this.props.history.push("/signup") }}>Sign Up</button>
              </form>
            </div>
            <div className="col s4"></div>
          </div>
        </div>
        <p>{this.state.errorMessage}</p>
      </div>
    );
  }
}