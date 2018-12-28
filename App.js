/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Dimensions from 'Dimensions';
import AppContainer from './src/router/routing';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}