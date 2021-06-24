import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './components/01-useState/CounterApp';
// import HooksApp from './HooksApp';

ReactDOM.render(
  <React.StrictMode>
    <CounterApp />
  </React.StrictMode>,
  document.getElementById('root')
);