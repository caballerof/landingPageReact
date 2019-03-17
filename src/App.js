import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured/index';
import VenueInfo from './components/venueInfo/index';
import Highlights from './components/Highlights/index';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';
import { Element } from 'react-scroll';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Element name="starts">
          <Featured />
        </Element>
        <Element name="info">
          <VenueInfo />
        </Element>
        <Element name="highlights">
          <Highlights />
        </Element>
        <Element name="Pricing">
          <Pricing />
        </Element>
        <Element name="Location">
          <Location />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
