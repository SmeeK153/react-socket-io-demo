import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {subscribeToTimer} from './api';

class App extends Component {

  state = {
    timestamp: undefined
  }

  constructor(props) {
    super(props);

    subscribeToTimer((err, timestamp) => {
      this.setState({timestamp});
    });
  }


  render() {
    return (
      <div className="App">
      <p className="App-intro">
      This is the timer value: {this.state.timestamp}
      </p>
    </div>
    );
  }
}

export default App;
