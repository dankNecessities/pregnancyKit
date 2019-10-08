import React, { Component } from 'react';
import { createSwitchNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import MainNavigator from './MainNavigator';

export default RootNavigator = createSwitchNavigator(
	{
		"Welcome" : WelcomeScreen,
		"Home" : MainNavigator
	},
	{
		initialRouteName: "Welcome",
		headerMode: "none"
	}
);