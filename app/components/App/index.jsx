import React, { Component } from 'react';

require('./app.scss');

import Road from '../Road';
import HeroCar from '../HeroCar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 100,
    };
  }

  render() {
    return (
      <div className="app">
        <Road status="run" speed="100" />
        <HeroCar carSide="right" status="run" speed="101" />
      </div>
    );
  }
}
