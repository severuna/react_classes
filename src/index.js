import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Timer extends Component {

  constructor(props) {
    super(props);
    this.state = {  
      second: '00',
      min: '02',
      interval: null
    }
  }

  componentDidMount() {
    window.addEventListener('load', this.setStart(true));
  }

  componentWillUnmount() { 
    window.removeEventListener('load', this.setStart)  ;
  }
  
  setStart (bool) {

    if (bool === true) {

      this.interval = setInterval( () => {

        if (this.state.second === 1 && this.state.min === 0) {

          clearInterval(this.interval);
          this.interval = null;

          this.setState((state) => ({
            second: state.second = '00'
          }));

          this.setState((state) => ({
            min: state.min = '02'
          }));

          return 

        } 

        if (this.state.second === 0 || this.state.second === '00') {

          this.setState((state) => ({
            second: state.second = 60
          }));
          
          this.setState((state) => ({
            min: Number(state.min) - 1
          }));
        }

        this.setState((state) => ({
          second: Number(state.second) - 1
        }));

      }, 1000);

    } else if (bool === false ) {

      clearInterval(this.interval);
      this.interval = null

    }

  }

  render() {

    // window.onload = this.setStart(true);

    return (
      <div className='timer column'>
        <h1 className='title'>Homework 18. ReactJS. Классові компоненти. Стан та життєвий цикл</h1>
        <div className='btns row'>
          <button className='btn' onClick={() => this.setStart(true)}>Start</button>
          <button className='btn' onClick={() => this.setStart(false)}>Pause</button>
        </div>
        <div className='screen row'>
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
