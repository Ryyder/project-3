import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TwitterContainer from "./components/TwitterContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TwitterContainer />
      </div>
    );
  }
}

export default App;
