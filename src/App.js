import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/footer/footer';
import Spinner from './components/spinner/spinner.component';
import TeamList from './components/team-list/team-list.component';
import Sponsors from './components/sponsors/sponsors.component';
import ContactForm from './components/contact-us/contact.component';
import './App.css';

import Navigation from "./components/Navigation"

import { Jumbotron } from 'reactstrap';
import Slider from "./components/slider/slider.component"
class App extends Component {
  render() {
    return (
        <div className="App">
          <Navigation />
          <Jumbotron className="jumbotron">
              <h1 className="display-3">Happy Hour Foundation</h1>
              <p className="lead"><em>We are a community based organzation with goals to look after the community</em></p>
              <hr className="my-2" />
              <p className="lead2"> We are based in Delft South</p>
              <p className="">
                  {/* <Button color="primary">Contact</Button> */}
              </p>
          </Jumbotron>
          <br />
          <TeamList />
          <br />
          <Slider />
          <br />
          <Sponsors />
          <br />
          <ContactForm />
          <br />
          <Spinner />
          <br />
          <Footer />
        </div>
    );
  }
}

export default App;
