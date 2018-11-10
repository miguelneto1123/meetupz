import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class MeetupDetail extends Component {
  constructor(props) {
    super(props);

    this.state = { details: {} };
  }

  componentWillMount() {
    this.getDetails();
  }

  getDetails() {
    const id = this.props.match.params.id;
    const host = window.location.hostname;
    axios.get(`http://${host}:3000/api/meetups/${id}`).then(res => {
      //console.log(res.data);
      this.setState({ details: res.data });
    });
  }

  deleteMeetup() {
    const { id } = this.state.details;
    const host = window.location.hostname;
    axios.delete(`http://${host}:3000/api/meetups/${id}`).then(res => {
      this.props.history.push("/");
    });
  }

  render() {
    const { details } = this.state;
    return (
      <div className="container">
        <br />
        <Link to="/" className="btn blue darken-4 left">
          Back
          <i className="material-icons left">arrow_back</i>
        </Link>
        <br />
        <h3>{details.name}</h3>
        <ul className="collection">
          <li className="collection-item">City: {details.city}</li>
          <li className="collection-item">Address: {details.address}</li>
        </ul>
        <br />
        <Link to={`/meetups/edit/${details.id}`} className="btn blue darken-4">
          <i className="material-icons left">mode_edit</i> Edit
        </Link>
        <button className="btn red right modal-trigger" data-target="modal1">
          <i className="material-icons right">clear</i> Delete
        </button>
        <div className="row center-align">
          <div id="modal1" className="modal col m3 l2 offset-m3 offset-l3">
            <div className="modal-content">
              <p>Are you sure?</p>
            </div>
            <div className="modal-footer">
              <button className="modal-close waves-effect waves-green btn-flat left">
                No
              </button>
              <button
                className="waves-effect waves-red btn-flat right"
                onClick={this.deleteMeetup.bind(this)}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MeetupDetail;
