import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout";
import Modal from "../Modal";
import Menu from "../Menu"
import Title from "../PageTitle"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from "../Carousel"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./style.css"
import { grey } from "@material-ui/core/colors";


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(7),
    fontSize: "2.8rem",
  },
  input: {
    display: 'none',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  partyChoices: {
    textAlign: 'center',
  },
  blankSpace:{
    height: "10vh",
  },
  electionInfoDiv:{
    textAlign: "center",
    color: "grey",
  }

}));

export default function Home() {
  const classes = useStyles();



  return (
    <div>
      <Menu
        content={
          <div className={classes.root}>
            <Grid container spacing={3}>
              {/* <Grid item xs={12} lg={6}>
                <Paper className={classes.paper}>
                <Carousel className="center" />
                </Paper>
              </Grid> */}
              <Grid item xs={12} lg={12}>
                <Grid item spacing={5}>
                  <Title title="Presidential Primaries" />
                  {/* <Paper className={classes.paper}> */}
                  <div className={classes.blankSpace}></div>
                  <div className={classes.partyChoices}>
                    <Link to={`/democrats`}>
                      <Button variant="contained" color="primary" className={classes.button}>
                        Democrat
                      </Button>
                    </Link>

                    <Link to={`/republican`}>
                      <Button variant="contained" color="secondary" className={classes.button}>
                        Republican
                      </Button>
                    </Link>
                    </div>
                  {/* </Paper> */}
                </Grid>
                <Grid item spacing={3}>
                  {/* <Paper className={classes.paper}> */}
                    {/* <Title title="My Election Info" /> */}
                    <div className={classes.electionInfoDiv}>
                    <h2>State Election Info</h2>
                    {/* <button> */}
                    <Button variant="contained" href="#" >
                      <Modal modalBtn="Primary Dates" />
                    </Button>
                    {/* </button> */}
                    </div>
                  {/* </Paper> */}
                </Grid>
              </Grid>
            </Grid>
          </div>
        }

      />

    </div>
  );

}