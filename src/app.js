import React, { Component } from 'react';
import { render } from 'react-dom';

export default class App extends Component {
  render() {
    return (
      <p>text</p>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
