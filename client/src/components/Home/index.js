import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout";
import Menu from "../Menu"
import Title from "../PageTitle"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from "../Carousel"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import "./style.css"


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
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
}));

export default function Home() {
  const classes = useStyles();



  return (
    <div>
      <Menu />
      <div className={classes.root}>
        <Grid container spacing={3} className="gridDiv">
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>
              <Carousel className="center" />
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper className={classes.paper}>
              <Title title="Primaries" />
              <Link to={`/democrats`}>
                <Button variant="contained" color="primary" className={classes.button}>
                  Democrat
                </Button>
              </Link>

              <Link to={`/republican`}>
                <Button variant="contained" color="secondary" className={classes.button}>
                Republican
              </Button><
                /Link>

              
            </Paper>
          </Grid>

        </Grid>
      </div>
    </div>
  );

}