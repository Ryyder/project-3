import React from 'react';
// import Router from 'react-router';
import { Link } from "react-router-dom";
import BackButton from '@material-ui/icons/ArrowBackIos';
import "./style.css"


export default function ButtonRouter(props) {
  return (
      <Link to={`/${props.party}`}><BackButton className="backBtn"/></Link>
  );
}
