import React, { Component } from 'react';

export default class CandidateInfo extends Component {

  state = {
    position: "",
    served: "",
    age: ""
  }

  componentDidUpdate(prevProps) {
    if (this.props.position !== prevProps.position) {
      console.log("this.props - didUpdate: ", this.props.position)
      this.setState({ position: this.props.position })
      this.setState({ served: this.props.served })
      this.setState({ age: this.props.age })
    }
  }

  render() {
    // console.log("this.state: ", this.state.image)
    // console.log("this.props: ", this.props.image)
    return (
      <div>
        <p>Current Position: {this.state.position}</p>
        <p>Years Served: {this.state.served}</p>
        <p>Age: {this.state.age}</p>
      </div>
    );
  }
}