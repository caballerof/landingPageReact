import React, { Component } from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '1500px', backgroundColor: 'red' }}>
        <header>
          <Header />
        </header>
      </div>
    );
  }
}

export default App;
