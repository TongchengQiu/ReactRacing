import React, { Component } from 'react';
import { render } from 'react-dom';

require('./assets/style/main.scss');

import App from './components/App';

render(
  <App/>,
  document.getElementById('root')
);
