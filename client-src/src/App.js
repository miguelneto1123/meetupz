import React from "react";
import { Link } from "react-router-dom";

import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Main />
    <div className="fixed-action-btn">
      <Link to="/meetups/add" className="btn-floating btn-large red">
        <i className="large material-icons">add</i>
      </Link>
    </div>
  </div>
);

export default App;
