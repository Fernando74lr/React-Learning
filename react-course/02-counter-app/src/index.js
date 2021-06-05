import React from 'react';
import ReactDOM from 'react-dom';
import FirstApp from './FirstApp';

import './index.css';

const divRoot = document.querySelector('#app');

ReactDOM.render(<FirstApp data='This is a test' />, divRoot);