import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/scenes'
import {AppRegistry} from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

AppRegistry.registerComponent ('App', ()=>App)