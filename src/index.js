import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = {  
      second: '00',
      min: '00',
      hour: '00'
    }
  }

  setStart () {
    this.setState((state) => ({
      second: Number(state.second) + 1
    }));
  }

  setPause () {
    this.setState((state) => ({
      second: Number(state.second)
    }));
  }

  render() {
    return (
      <div className='timer column'>
        <h1 className='title'>Homework 18. ReactJS. Классові компоненти. Стан та життєвий цикл</h1>
        <div className='btns row'>
          <button className='btn' onClick={() => this.setStart()}>Start</button>
          <button className='btn' onClick={() => this.setPause()}>Pause</button>
        </div>
        <div className='screen row'>
          <div className='screen-field column'>
            <p className='time'>{this.state.hour}</p>
            <p className='value'>hour</p>
          </div>
          <div className='screen-field column'>
            <p className='time'>{this.state.min}</p>
            <p className='value'>minute</p>
          </div>
          <div className='screen-field column'>
            <p className='time'>{this.state.second}</p>
            <p className='value'>second</p>
          </div>
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Timer />
);
