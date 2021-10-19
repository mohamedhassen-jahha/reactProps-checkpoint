import React, { Component } from "react";
import PropTypes from "prop-types";

let Style = {
  fontFamily: "Roboto",
  fontSize: "50px",
  textTransform: "uppercase",
  color: "cadetblue",
};

let addressTag = {
  fontFamily: "Roboto",
  fontSize: "22px",
  textTransform: "uppercase",
  color: "rgb(226, 140, 60)",
};
let disTag = {
  width: "40%",
  fontFamily: "Roboto",
  fontSize: "15px",
  color: "rgb(87, 85, 85)",
  margin: "10px auto",
};

export default class Profile extends Component {
  render() {
    return (
      <div>
        {console.log(this.props)}
        <h1 style={Style}>{this.props.fullName}</h1>
        <h2 style={addressTag}>{this.props.prof}</h2>
        <p style={disTag}>{this.props.bio}</p>
      </div>
    );
  }
}

// Setting up the default values of the props
Profile.defaultProps = {
  fullName: "No Name TO SHOW",
  prof: "No Profession TO SHOW",
  bio: "No Bio TO SHOW",
};

// Testing the props type
Profile.propTypes = {
  fullName: PropTypes.number,
  prof: PropTypes.number,
  bio: PropTypes.number,
};
