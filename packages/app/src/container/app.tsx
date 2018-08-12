import React, { Component } from 'react';
import Provider from 'src/provider';
import { HelloWorld } from './hello-world';

export default class App extends Component {
  render() {
    return (
      <Provider>
        <HelloWorld />
      </Provider>
    );
  }
}
