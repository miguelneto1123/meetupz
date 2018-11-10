import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper blue darken-1">
            <a
              data-target="main-menu"
              className="sidenav-trigger show-on-large"
            >
              <i className="material-icons">menu</i>
            </a>
            <div className="brand-logo center">Meetupz</div>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <Link to="/">
                  <i className="left material-icons">group</i>
                  Meetups
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <ul id="main-menu" className="sidenav">
          <li>
            <Link to="/">
              <i className="left material-icons">group</i>
              Meetups
            </Link>
          </li>
          <li>
            <Link to="/meetups/add">
              <i className="left material-icons">add</i>
              Add Meetup
            </Link>
          </li>
          <li>
            <Link to="/about">
              <i className="left material-icons">info</i>
              About
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
