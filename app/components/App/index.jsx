import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  changeSpeed
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
    const { dispatch, speed } = this.props;
    console.log(speed);
    return (
      <div className="app" onClick={() => dispatch(changeSpeed(109))}>
        <Road status="run" speed="100" />
        <HeroCar carSide="right" status="run" speed="101" />
      </div>
    );
  }
}

function select(state) {
  return {
    speed: state.speed
  };
}

export default connect(select)(App);
