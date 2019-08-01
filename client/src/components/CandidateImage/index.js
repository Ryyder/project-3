import React, { Component } from 'react';

export default class CandidateImage extends Component {

  state = {
    image: ""
  }

  componentDidUpdate(prevProps) {
    if (this.props.image !== prevProps.image) {
      console.log("this.props - didUpdate: ", this.props.image)
      this.setState({ image: this.props.image })
    }
  }

  render() {
    console.log("this.state: ", this.state.image)
    console.log("this.props: ", this.props.image)
    return (
      <img className="candidateImage" src={this.state.image} />
    );
  }
}