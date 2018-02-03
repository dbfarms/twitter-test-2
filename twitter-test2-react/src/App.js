import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Search from './search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
      </div>
    );
  }
}

export default App;
