import React from 'react';
import ReactDOM from 'react-dom';
// import SimpleForm from './components/02-useEffect/SimpleForm';
// import CounterApp from './components/01-useState/CounterApp';
// import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
// import HooksApp from './HooksApp';
import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook';

ReactDOM.render(
  <React.StrictMode>
    <FormWithCustomHook />
  </React.StrictMode>,
  document.getElementById('root')
);