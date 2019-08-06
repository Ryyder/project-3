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
import { withStyles, makeStyles } from '@material-ui/styles';
import Favorite from "@material-ui/icons/Favorite";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  candidate:{
    textAlign: 'center',
  },
  paper: {
    boxShadow: '5px 10px 8px #888888',

    // padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
  red: {
    color: "red"
  },
  pale: {
    color: "black"
  },
  ripple: {
    centerRipple: true
  }
});

class CandidatePage extends React.Component {
  state = {
    likes: 0,
    favorites: [],
    userLike: false,
    userInfo: {},
    id: "",
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
    let userInfo = JSON.parse(localStorage.getItem("userInfo"))
    let self = this
    // Query DB for candidate ID
    axios.get(`http://localhost:3001/api/candidates/name?route_name=${this.props.match.params.candidateName}`).then((response) => {
      if (!response.data) {
        this.setState({ redirectMe: true })
      } else {

        let myLikes = []

        if (response.data.favorites && response.data.favorites.length > 0) {
          myLikes = response.data.favorites.filter(x => x.userID === userInfo._id)
        }

        self.setState({
          likes: response.data.favorites.length,
          favorites: response.data.favorites,
          userInfo: userInfo,
          userLike: myLikes && myLikes.length > 0,
          id: response.data.model._id,
          summary: response.data.model.summary[0],
          news_name: response.data.model.news_name,
          twitter: response.data.model.twitter,
          party: response.data.model.party,
          name: response.data.model.name,
          position: response.data.model.cur_position,
          served: response.data.model.yrs_served,
          age: response.data.model.age,
          image: response.data.model.img_url
        });
      }
    }).catch(err => console.log(err))
  }

  handleLike = () => {
    let userInfo = JSON.parse(localStorage.getItem("userInfo"))
    let self = this
    axios(
      {
        method: "post",
        url: `http://localhost:3001/api/favorite/updatelike/candidate/${this.state.id}/user/${userInfo._id}`,
      }
    )
      .then(function (response) {
        console.log(response);
        let count = self.state.likes
        if (self.state.userLike) {
          count = count - 1
        }
        else {
          count = count + 1
        }
        self.setState({ userLike: !self.state.userLike, likes: count })
      })
      .catch(function (error) {
        console.log(error);
      });

    /* axios.put(`http://localhost:3001/api/candidates/${this.state.id}`)
    .then((res) => {
      console.log(res);
    }) */

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
    const { classes } = this.props;
    let favoriteClasses = this.state.userLike ? classes.red : classes.pale


    return (
      <React.Fragment>
        <Menu
          content={
            <div>
              <BackButton party={this.state.party} />
              <div className="container">
                <Title
                  title={this.state.name}
                />

                <div className={classes.root}>
                    <Favorite className={favoriteClasses} onClick={this.handleLike} />                 
                  <h1>{this.state.likes}</h1>
                  <Grid container spacing={3}>
                    <Grid item xs={12} >
                      <div className={classes.candidate}>
                        <CandidateImage
                          image={this.state.image}
                        />
                        <CandidateInfo
                          position={this.state.position}
                          served={this.state.served}
                          age={this.state.age}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                      <Paper className={classes.paper}>
                        <Accordion summary={this.state.summary} news_name={this.state.news_name} />
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                      <Paper className={classes.paper}>
                        {this.state.twitter ? twitterContainer : 'Loading..'}

                      </Paper>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          }

        />

      </React.Fragment>
    )
  }
}
export default withRouter(withStyles(styles)(CandidatePage));