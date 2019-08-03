import React, { Component } from "react";
import Newscard from "../Newscard"
import "./style.css"
import axios from "axios";

class News extends Component {

  state = {
    articles: [],
    candidate: this.props.candidate
  };

  componentDidUpdate(prevProps) {
    if (this.props.candidate !== prevProps.candidate) {
      axios.get("/api/news/" + this.props.candidate).then((response) => {
        console.log("response", response.data)
        this.setState({ articles: response.data });
      }).catch(err => console.log(err))

    }
  }

  render() {
    return (
      <Newscard article={this.state.articles} />
    );
  }

}



export default (News)