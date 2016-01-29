import React, { Component } from 'react';

require('./road.scss');

/**
 * props:
 *         status: 'loading', 'stop', 'run'
 *         speed: num
 */

export default class Road extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let style = {};
    if(this.props.status == 'run') {
      let {speed} = this.props;
      style.animationDuration = ((1 / speed) * 150) + 's';
    }
    return (
      <div className="road">
        <div
          className={"road-cont road-" + this.props.status}
          style={style}
          >
        </div>
      </div>
    );
  }

}
