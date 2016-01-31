import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  startGame
} from '../../actions';

require('./app.scss');

import Road from '../Road';
import HeroCar from '../HeroCar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 100,
    };
  }

  render() {
    const { dispatch, speed, side, status } = this.props;
    return (
      <div className="app" onClick={() => dispatch(startGame())}>
        <Road status={status} speed={speed} />
        <HeroCar carSide={side} status={status} speed={speed} />
      </div>
    );
  }
}

function select(state) {
  return {
    speed: state.speed,
    side: state.side,
    status: state.status,
  };
}

export default connect(select)(App);
