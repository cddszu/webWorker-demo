import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import myWorker from './worker/file.worker.js';
import aWorker from './worker/a.worker.js';
import {recurFib} from './utils/index'




class App extends Component {
  constructor() {
    super();
    this.state = {counter: 0};
  }

  componentDidMount() {
    const worker = new myWorker();
    worker.postMessage({b:1});
    worker.onmessage = function (event) {console.log('onmessage', event.data);};
    console.time('recurFibMain')
    recurFib(20)
    console.timeEnd('recurFibMain')
    // const a = new aWorker()
    // a.postMessage({})
    // // b.postMessage({})
    // for(let i =0;i<10;i++) {
    //   let w = new aWorker()
    //   w.postMessage(i)
    // }
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
