import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';
import { Provider } from 'react-redux';

import Store from './src/mobile/redux/store';

import App from './src/mobile/App';

class mobile extends Component {
  render() {
    return (
      <Provider store={Store}>
        <App/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('mobile', () => mobile);
