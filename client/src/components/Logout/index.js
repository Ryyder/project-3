import React, {Component} from "react";


export default class Logout extends Component {

  //clears local storage and routes the user to the login page
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
