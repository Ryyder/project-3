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
        axios.get("/api/candidates/5d3c8855131a64ed67d6c2c0").then((response) =>{
            console.log("DB test");
            console.log(response.data)
            console.log("twitter = ", response.data.twitter)
            this.setState({ 
              summary: response.data.summary[0],
              news_name:  response.data.news_name,
              twitter: response.data.twitter
            });
            // console.log("this.twitter", this.twitter);
        }).catch(err => console.log(err))
    }
    render() {
      console.log("Candidate state.twitter = ", this.state.twitter);
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