import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class EditMeetup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: "loading...",
      address: "loading...",
      city: "loading..."
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const { id } = this.props.match.params;

    const host = window.location.hostname;
    axios.get(`http://${host}:3000/api/meetups/${id}`).then(res => {
      const { id, name, address, city } = res.data;
      this.setState({ id, name, address, city });
    });
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  }

  editMeetup(e) {
    const { name, address, city } = e.target;
    const meetup = {
      name: name.value,
      address: address.value,
      city: city.value
    };
    const { id } = this.state;

    const host = window.location.hostname;
    axios.put(`http://${host}:3000/api/meetups/${id}`, meetup).then(res => {
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
          <h1>Edit Meetup</h1>
          <form onSubmit={this.editMeetup.bind(this)} className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <input
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <label htmlFor="name" className="active">
                  Meetup name
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input
                  name="address"
                  type="text"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
                <label htmlFor="address" className="active">
                  Address
                </label>
              </div>
              <div className="input-field col s6">
                <input
                  name="city"
                  type="text"
                  value={this.state.city}
                  onChange={this.handleChange}
                />
                <label htmlFor="city" className="active">
                  City
                </label>
              </div>
            </div>
            <button className="btn blue darken-4" type="submit" name="action">
              Save
              <i className="material-icons left">check</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditMeetup;
