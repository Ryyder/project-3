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
import { withStyles } from '@material-ui/styles';

// import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
});

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
    const { classes } = this.props;


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
                  <Grid container spacing={3}>
                    <Grid item xs={12} className={classes.paper}>
                        <CandidateImage
                          image={this.state.image}
                        />
                        <CandidateInfo
                          position={this.state.position}
                          served={this.state.served}
                          age={this.state.age}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
                      <Paper className={classes.paper}>
                        <Accordion summary={this.state.summary} news_name={this.state.news_name} />
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} lg={6}>
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