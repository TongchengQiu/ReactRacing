import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  startGame,
  turnLeft,
  turnRight
} from '../../actions';

require('./app.scss');

import Road from '../Road';
import HeroCar from '../HeroCar';
import TimeNum from '../TimeNum';
import Btn from '../Btn';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dispatch, speed, side, status, startTime, isWaitStart } = this.props;
    return (
      <div className="app">

        <Road
          status={status}
          speed={speed}
        />

        <HeroCar
          carSide={side}
          status={status}
          speed={speed}
          turnLeft={() => dispatch(turnLeft())}
          turnRight={() => dispatch(turnRight())}
        />

        {
          isWaitStart?
          <TimeNum
            startTime={startTime}
          />
          :null
        }

        {
          ((status == 'loading') || (status == 'stop'))?
          <Btn
            startGame={() => dispatch(startGame())}
            status={status} />
          :null
        }

      </div>
    );
  }
}

function select(state) {
  return {
    speed: state.speed,
    side: state.side,
    status: state.status,
    startTime: state.startTime,
    isWaitStart: state.isWaitStart,
  };
}

export default connect(select)(App);
