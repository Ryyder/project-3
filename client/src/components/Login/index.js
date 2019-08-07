import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import logo from '../../VotEd_Logo_lg.png';



export default class Home extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: ""
  };

  handleSubmit = (event) => {
    event.preventDefault();

    //blank email or password validation
    const { email, password } = this.state;
    if(!email || !password) {
      this.setState({errorMessage: "Invalid Email or Password"})
      return
    }
    //send our user's email and password to the db
    axios({
      url: "/authentication/signin",
      method: "POST",
      data: {
        email,
        password
      }
    })
      .then((response) => {
    
        //tells us the user is authenticated on the backend
        const isAuthenticated = response.data.isAuthenticated;
        //store user info in local storage
        window.localStorage.setItem("userInfo", JSON.stringify(response.data));
        //store user is authenticated in local storage
        window.localStorage.setItem("isAuthenticated", isAuthenticated);
        //redirect user to the root page
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.response.data.message
        });
      });
  };

  //detecting and outputting keypress on forms
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };





  render() {



    const isAuthenticated = window.localStorage.getItem("isAuthenticated");

    if (isAuthenticated) {
      return <Redirect to="/" />
    }

    let errorMessage = ""
    if(this.state.errorMessage) {
      errorMessage = "Check your login and try again"
    }



    //JSX
    return (
      <div>
        <div className="container">
          <div id="authLogo" className="row">
            <div className="col s12">
              <img src={logo} height="100" />
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
        <p>{errorMessage}</p>
      </div>

    );
  }
}