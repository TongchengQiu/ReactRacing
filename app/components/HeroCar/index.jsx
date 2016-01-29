import React, { Component } from 'react';

require('./heroCar.scss');

/**
 * props:
 *         status: 'loading', 'stop', 'run'
 *         speed: num
 *         carSide: 'left', 'right'
 */

export default class HeroCar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {status, speed, carSide} = this.props;
    let _carStatus = 'normal';
    let _carSide = 'left';
    if(status == 'normal') {
      _carStatus = 'loading';
    } else if(status == 'stop') {
      _carSide = carSide;
      _carStatus = 'died';
    } else if(status == 'run') {
      if(speed <= 100) {
        _carStatus = 'slow';
      }
      _carSide = carSide;
    }
    return (
      <div className={"hero-car" + " hero-car-" +  _carStatus + " hero-car-" +  _carSide}>

      </div>
    );
  }
}
