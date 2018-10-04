import React, { Component } from 'react';
import logo from './assets/logo-uxactly-monochrome.svg';
import './App.css';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div>
      <div className="background-header-image">
        <div className="pull-right">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="header-text">
          <h2 className="header-title">Wir Suchen noch</h2>
          <h2 className="header-title">Frontend-Helden</h2>
          <p className="header-paragraph">Abteilung: IT</p>
          <p className="header-paragraph">Standort: Berlin, Germany</p>
        </div>
      </div>
      <div className="centered">
        <Form/>
      </div>
      </div>
    );
  }
}

export default App;
