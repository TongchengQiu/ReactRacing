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

  componentDidMount() {
    window.addEventListener("keydown", this.sideHandleKey.bind(this), false);
    window.addEventListener("devicemotion", this.sideHandleDevicemotion.bind(this), false);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.sideHandleKey.bind(this), false);
    window.removeEventListener("devicemotion", this.sideHandleDevicemotion.bind(this), false);
  }

  sideHandleKey(e) {
    if(this.props.status != 'run') {
      return false;
    }
    switch(e.keyCode){
      case 37:
        this.props.turnLeft();
        break;
      case 39:
        this.props.turnRight();
        break;
    }
  }

  sideHandleDevicemotion(e) {
    var eventaccelerationIncludingGravity = e.accelerationIncludingGravity;
    if(this.props.status != 'run'){
      if(eventaccelerationIncludingGravity.x < -1){
        this.props.turnLeft();
      }else if(eventaccelerationIncludingGravity.x > 1){
        this.props.turnRight();
      }
    }
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
