import React, { Component } from 'react';
import { render } from 'react-dom';


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React Workshop</h1>
        <p>hello world</p>
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
