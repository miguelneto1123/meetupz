import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class AddMeetup extends Component {
  addMeetup(e) {
    const { name, address, city } = e.target;
    const meetup = {
      name: name.value,
      address: address.value,
      city: city.value
    };

    const host = window.location.hostname;
    axios.post(`http://${host}:3000/api/meetups`, meetup).then(res => {
      this.props.history.push("/");
    });
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <br />
          <Link to="/" className="btn blue darken-4 left">
            Back
            <i className="material-icons left">arrow_back</i>
          </Link>
          <br />
          <h1>Add Meetup</h1>
          <form onSubmit={this.addMeetup.bind(this)} className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input id="name" type="text" />
                <label htmlFor="name">Meetup name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="address" type="text" />
                <label htmlFor="address">Address</label>
              </div>
              <div className="input-field col s6">
                <input id="city" type="text" />
                <label htmlFor="city">City</label>
              </div>
            </div>
            <button className="btn blue darken-4" type="submit" name="action">
              Add
              <i className="material-icons left">add</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddMeetup;
