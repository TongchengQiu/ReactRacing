import React, { Component } from 'react';
import { render } from 'react-dom';

require('./assets/style/main.scss');

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app"></div>
    );
  }

}

render(
  <App/>,
  document.getElementById('root')
);
