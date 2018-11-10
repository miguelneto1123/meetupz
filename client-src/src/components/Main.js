import React from "react";
import { Switch, Route } from "react-router-dom";

import Meetups from "./Meetups";
import MeetupDetail from "./MeetupDetail";
import About from "./About";
import AddMeetup from "./AddMeetup";
import EditMeetup from "./EditMeetup";
import Login from "./Login";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Meetups} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/about" component={About} />
      <Route exact path="/meetups/add" component={AddMeetup} />
      <Route exact path="/meetups/edit/:id" component={EditMeetup} />
      <Route exact path="/meetups/:id" component={MeetupDetail} />
    </Switch>
  </main>
);

export default Main;
