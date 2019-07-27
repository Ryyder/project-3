import React from 'react';
import {withRouter} from 'react-router';
import TwitterContainer from "../TwitterContainer";
import Accordion from "../Accordion";
import axios from "axios";
import "./style.css"

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
        foreign_policy: ""
    }

    componentDidMount() {
        // Query DB for candidate ID
        axios.get("/api/candidates").then((response) =>{
            console.log("DB test");
            console.log(response.data);
        })
    }

    render() {
    //   console.log("test");
      return (
        <div className="container">
          <Accordion />
          <TwitterContainer />
        </div>
      )
    }
  }

export default withRouter(CandidatePage);


{/* <h2>{this.props.match.params.party}</h2> */}
{/* <h2>{this.props.match.params.candidateName}</h2> */}