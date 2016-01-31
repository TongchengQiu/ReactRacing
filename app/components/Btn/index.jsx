import React, { Component } from 'react';

require('./btn.scss');

export default class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplay: true
    };
  }

  handleClick() {
    this.props.startGame();
    this.setState({
      isDisplay: false,
    });
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)} className={"btn btn-" + this.props.status + (this.state.isDisplay?"":" none")}></div>
    );
  }
}
