import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    textAlign: "center"
  },
  inline: {
    display: 'inline',
  },
}));

export default ({ location }) => {
  const classes = useStyles();

  return (

    <List className={classes.root}>
        <ListItem 
        className={classes.root}
        alignItems="center"
        >
          <ListItemText
            primary="Election Date"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                  align="center"
                >
                  {location.election_date}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem 
        className={classes.root}
        alignItems="center">
          <ListItemText
            primary="Mail Voting"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                  align="center"
                >
                  {location.mail_voting}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
        <ListItem 
        className={classes.root}
        alignItems="center">
          <ListItemText
            primary="Early Voting"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                  align="center"
                >
                  {location.early_voting}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
    </List>

  )



  /* return (
    <ul>
      <li>
        {location.election_date}
      </li>

      <li>
        {location.mail_voting}
      </li>
      <li>
        {location.early_voting}
      </li>
    </ul>) */
}

