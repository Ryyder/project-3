import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import LocationDetails from "../LocationDetails";

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [location, setLocation] = React.useState('');
  const [open, setOpen] = React.useState(false);
  //custom hook
  const [data, setData] = React.useState('');
  //useEffect to only render stuff if the location is updated
  useEffect(() => {
    
    if (location) {
      axios.get("http://localhost:3000/api/myinfo/" + location).then(res => {
        setData([...res.data]);
      });
    }

    // adding location to the array tells useEffect to run the function when location is updated
  }, [location]);


  function handleChange(event) {
    setLocation(event.target.value);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="center" >
        <form autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">Choose a State</InputLabel>
            <Select
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={location}
              onChange={handleChange}
              inputProps={{
                name: 'state',
                id: 'demo-controlled-open-select',
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Alabama">Alabama</MenuItem>
              <MenuItem value="Alaska">Alaska</MenuItem>
              <MenuItem value="Arizona">Arizona</MenuItem>
              <MenuItem value="Arkansas">Arkansas</MenuItem>
              <MenuItem value="California">California</MenuItem>
              <MenuItem value="Colorado">Colorado</MenuItem>
              <MenuItem value="Connecticut">Connecticut</MenuItem>
              <MenuItem value="Delaware">Delware</MenuItem>
              <MenuItem value="Florida">Florida</MenuItem>
              <MenuItem value="Hawaii">Hawaii</MenuItem>
              <MenuItem value="Idaho">Idaho</MenuItem>
              <MenuItem value="Illinois">Illinois</MenuItem>
              <MenuItem value="Indiana">Indiana</MenuItem>
              <MenuItem value="Iowa">Iowa</MenuItem>
              <MenuItem value="Kansas">Kansas</MenuItem>
              <MenuItem value="Kentucky">Kentucky</MenuItem>
              <MenuItem value="Louisiana">Louisiana</MenuItem>
              <MenuItem value="Maine">Maine</MenuItem>
              <MenuItem value="Maryland">Maryland</MenuItem>
              <MenuItem value="Massachusetts">Massachusetts</MenuItem>
              <MenuItem value="Michigan">Michigan</MenuItem>
              <MenuItem value="Minnesota">Minnesota</MenuItem>
              <MenuItem value="Mississippi">Mississippi</MenuItem>
              <MenuItem value="Missouri">Missouri</MenuItem>
              <MenuItem value="Montana">Montana</MenuItem>
              <MenuItem value="Nebraska">Nebraska</MenuItem>
              <MenuItem value="Nevada">Nevada</MenuItem>
              <MenuItem value="New Hampshire">New Hampshire</MenuItem>
              <MenuItem value="New Jersey">New Jersey</MenuItem>
              <MenuItem value="New Mexico">New Mexico</MenuItem>
              <MenuItem value="New York">New York</MenuItem>
              <MenuItem value="North Carolina">North Carolina</MenuItem>
              <MenuItem value="North Dakota">North Dakota</MenuItem>
              <MenuItem value="Ohio">Ohio</MenuItem>
              <MenuItem value="Oklahoma">Oklahoma</MenuItem>
              <MenuItem value="Oregon">Oregon</MenuItem>
              <MenuItem value="Pennsylvania">Pennsylvania</MenuItem>
              <MenuItem value="Rhode Island">Rhode Island</MenuItem>
              <MenuItem value="South Carolina">South Carolina</MenuItem>
              <MenuItem value="South Dakota">South Dakota</MenuItem>
              <MenuItem value="Tenessee">Tenessee</MenuItem>
              <MenuItem value="Texas">Texas</MenuItem>
              <MenuItem value="Utah">Utah</MenuItem>
              <MenuItem value="Vermont">Vermont</MenuItem>
              <MenuItem value="Virginina">Virginia</MenuItem>
              <MenuItem value="Washington">Washington</MenuItem>
              <MenuItem value="West Virginia">West Virginia</MenuItem>
              <MenuItem value="Wisconsin">Wisconsin</MenuItem>
              <MenuItem value="Wyoming">Wyoming</MenuItem>
            </Select>
          </FormControl>
        </form>

        
        {data && <LocationDetails location={data[0]} />}
      </Grid>
    </div>
  );
}