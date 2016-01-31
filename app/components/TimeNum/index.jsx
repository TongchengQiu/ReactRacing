import React, { Component } from 'react';

require('./timeNum.scss');

export default class TimeNum extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="time-num">
        <span className={"cont-num num-" + this.props.startTime}></span>
      </div>
    );
  }
}
