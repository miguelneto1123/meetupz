import React, { Component } from "react";
import axios from "axios";

import MeetupItem from "./MeetupItem";

class Meetups extends Component {
  constructor() {
    super();
    this.state = {
      meetups: []
    };
  }

  getMeetups() {
    const host = window.location.hostname;
    axios.get(`http://${host}:3000/api/meetups`).then(res => {
      this.setState({ meetups: res.data });
    });
  }

  componentWillMount() {
    //   if (window.localStorage.getItem("token")) {
    this.getMeetups();
    //   } else {
    //     this.props.history.push("/login");
    //   }
  }

  render() {
    const meetupItems = this.state.meetups.map(m => {
      return <MeetupItem meetup={m} key={m.id} />;
    });
    return (
      <div className="container">
        <h1>Meetups</h1>
        <ul className="collection">{meetupItems}</ul>
      </div>
    );
  }
}

export default Meetups;
