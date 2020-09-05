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
          <Jumbotron id="landing" className="jumbotron">
              <h1 className="display-3">HAPPY HOUR FOUNDATION</h1>
              <p className="lead"><em><span className="lead-span">Passionate about providing help, a better solution & support homeless people and underprivileged communities. <strong>"It is a home of kindness in our lifetime"</strong></span></em></p>
              <hr className="my-2" />
              <p className="lead2"> <span className="lead-span1">INTERGRIITY</span> | <span className="lead-span2">COMPASSION</span> | <span className="lead-span3">PERSEVERANCE</span> </p>
              <p className="">
                  {/* <Button color="primary">Contact</Button> */}
              </p>
          </Jumbotron>
          <br />
          <TeamList />
          <br />
          <Sponsors />
          <br />
          <Slider />
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
