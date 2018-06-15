import React from 'react';
import ReactDOM from 'react-dom';
import App from './template/index.js';
import './index.css'

import serviceInterface from './template/interface.json'

const defaults = {}

Object.keys(serviceInterface).forEach(propName => {
  defaults[propName] = serviceInterface[propName].default
})

ReactDOM.render(<App { ...defaults } />, document.getElementById('root'));
