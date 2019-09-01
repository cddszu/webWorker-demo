import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import myWorker from './worker/file.worker.js';
import aWorker from './worker/a.worker.js';
import {recurFib} from './utils/index'




class App extends Component {
  constructor() {
    super()
    this.state = {counter: 0, number: 0, result: ''}
    this.postMessageToWorker = this.postMessageToWorker.bind(this)
    this.inputChange = this.inputChange.bind(this)
  }

  componentDidMount() {
    const _this = this
    this.worker = new myWorker();
    
    this.worker.onmessage = function (event) {
      _this.setState({
        result: event.data
      })
    };
  }
  postMessageToWorker() {
    this.worker.postMessage(this.state.number);
  }
  inputChange(e) {
    let value =  e.target.value
    let number = value.replace(/[^0-9]/g,'')
    this.setState({
      number: parseInt(number || 0)
    })
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.inputChange} value={this.state.number}/>

        <button onClick={this.postMessageToWorker} className='worker'>向worker发送斐波那契数列计算</button>
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default App;
