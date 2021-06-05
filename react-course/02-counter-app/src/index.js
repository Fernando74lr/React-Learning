import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from './FirstApp';

import './index.css';

const divRoot = document.querySelector('#app');

ReactDOM.render(<FirstApp age={20} greeting='This is a test' />, divRoot);