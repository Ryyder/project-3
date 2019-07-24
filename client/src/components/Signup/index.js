import React, { Component } from "react";
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
import "./style.css"
import axios from "axios";
import logo from '../../united-states.png';


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

                <input type="text" name="email" onChange={this.handleChange} />
                <label for="password">Password</label>

                <input type="password" name="password" onChange={this.handleChange} />

                <button>Signup</button>
                <button onClick={() => { this.props.history.push("/") }}>Cancel</button>
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