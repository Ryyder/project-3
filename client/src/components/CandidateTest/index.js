import React from 'react';
import {withRouter} from 'react-router';
import TwitterContainer from "../TwitterContainer";
import Accordion from "../Accordion";
import axios from "axios";
// import "./style.css"

class CandidatePage extends React.Component {
    state = {
        name: "",
        twitter: "",
        news_name: "",
        bio: "",
        healthcare: "",
        climate: "",
        immigration: "",
        economy: "",
        foreign_policy: "",
        summary: []
    }
    componentDidMount() {
        // Query DB for candidate ID
        axios.get("/api/candidates/5d3c8efe064f8b9e69d1fadf").then((response) =>{
            this.setState({ 
              summary: response.data.summary[0],
              news_name:  response.data.news_name,
              twitter: response.data.twitter
            });
        }).catch(err => console.log(err))
    }
    render() {
      const twitterContainer = (
        <TwitterContainer 
          name={this.state.twitter}
        />
      );
      return (
        <div className="container">
          <Accordion summary={this.state.summary} news_name={this.state.news_name}/>
          {this.state.twitter ? twitterContainer : 'Loading..'}
        </div>
      )
    }
  }
export default withRouter(CandidatePage);