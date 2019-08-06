import React from 'react';
import { withRouter } from 'react-router';
import TwitterContainer from "../TwitterContainer";
import Accordion from "../Accordion";
import axios from "axios";
import BackButton from "../BackButton"
import Menu from "../Menu";
import Title from "../PageTitle";
import CandidateImage from "../CandidateImage";
import CandidateInfo from "../CandidateInfo";
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
    summary: [],
    party: "",
    position: "",
    served: "",
    age: "",
    image: ""
  }
  componentDidMount() {
    // Query DB for candidate ID
    axios.get("/api/candidates/?route_name=" + this.props.match.params.candidateName).then((response) =>{

      this.setState({
        summary: response.data.summary[0],
        news_name: response.data.news_name,
        twitter: response.data.twitter,
        party: response.data.party,
        name: response.data.name,
        position: response.data.cur_position,
        served: response.data.yrs_served,
        age: response.data.age,
        image: response.data.img_url
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
      <React.Fragment>
        <Menu />
        <BackButton party={this.state.party} />
        <div className="container">
          <Title
            title={this.state.name}
          />
          <CandidateImage
            image={this.state.image}
          />
          <CandidateInfo
            position={this.state.position}
            served={this.state.served}
            age={this.state.age}
          />
          <Accordion summary={this.state.summary} news_name={this.state.news_name} />
          {this.state.twitter ? twitterContainer : 'Loading..'}
        </div>
      </React.Fragment>
    )
  }
}
export default withRouter(CandidatePage);