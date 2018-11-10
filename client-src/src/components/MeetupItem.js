import React, { Component } from "react";
import { Link } from "react-router-dom";

class MeetupItem extends Component {
  render() {
    const meetup = this.props.meetup;
    return (
      <li className="collection-item">
        <Link to={`/meetups/${meetup.id}`}>{meetup.name}</Link>
      </li>
    );
  }
}

export default MeetupItem;
