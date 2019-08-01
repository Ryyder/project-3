import React from 'react';
import { withRouter } from 'react-router';
import TwitterContainer from "../TwitterContainer";
import Accordion from "../Accordion";
import axios from "axios";
import { Redirect } from "react-router-dom";
import BackButton from "../BackButton"
import Menu from "../Menu";
import Title from "../PageTitle";
import CandidateImage from "../CandidateImage";
import CandidateInfo from "../CandidateInfo";
// import "./style.css"
class CandidatePage extends React.Component {
  state = {
    redirectMe: false,
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
    axios.get("/api/candidates?route_name=" + this.props.match.params.candidateName).then((response) => {
      if (response.data.length === 0) {
        this.setState({ redirectMe: true })
      } else {
        this.setState({
          summary: response.data[0].summary[0],
          news_name: response.data[0].news_name,
          twitter: response.data[0].twitter,
          party: response.data[0].party,
          name: response.data[0].name,
          position: response.data[0].cur_position,
          served: response.data[0].yrs_served,
          age: response.data[0].age,
          image: response.data[0].img_url
        });
      }
    }).catch(err => console.log(err))
  }
  render() {
    if (this.state.redirectMe) {
      return <Redirect to="/404" />
    }
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