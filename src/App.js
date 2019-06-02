import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import myWorker from './worker/file.worker.js';



class App extends Component {
  constructor() {
    super();
    this.state = {counter: 0};
  }

  componentDidMount() {
    const worker = new myWorker();
    worker.postMessage('123');
    worker.onmessage = function (event) {};
    worker.addEventListener('message', event => {
      console.log(event.data)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
