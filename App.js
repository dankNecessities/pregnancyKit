import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import { createAppContainer } from 'react-navigation';

const AppContainer = createAppContainer(RootNavigator);

export default function App() {
  return (
    <AppContainer />
  );
}