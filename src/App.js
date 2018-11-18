import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppFrame from './components/AppFrame';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppFrame header="Index" body="Body"></AppFrame>
      </div>
    );
  }
}

export default App;
