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
        axios.get("/api/candidates").then((response) =>{
            console.log("DB test");
            console.log(response.data)
            console.log(response.data[0].summary[0].bio)
            console.log(response.data[0].news_name)
            // console.log(response.data.twitter)
            this.setState({ 
              summary: response.data[0].summary[0],
              news_name:  response.data[0].news_name
            });
            // console.log("this.twitter", this.twitter);
        }).catch(err => console.log(err))
    }
    render() {
    //   console.log("test");
      return (
        <div className="container">
          <Accordion summary={this.state.summary} news_name={this.state.news_name}/>
          {/* <TwitterContainer 
            name={this.twitter}
          /> */}
        </div>
      )
    }
  }
export default withRouter(CandidatePage);
{/* <h2>{this.props.match.params.party}</h2> */}
{/* <h2>{this.props.match.params.candidateName}</h2> */}