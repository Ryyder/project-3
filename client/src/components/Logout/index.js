import React, {Component} from "react";


export default class Logout extends Component {

  handleLogout = () => {
    window.localStorage.clear();
    window.location.href = '/';
  }

  render() {
    return (
      <div>
        <button onClick={this.handleLogout}>LogOut</button>
      </div>
      
    );
  }

}
