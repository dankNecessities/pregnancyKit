import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import PreparationNavigator from './PreparationNavigator';

export default RootNavigator = createStackNavigator(
	{
		"Welcome" : WelcomeScreen,
		"Home" : PreparationNavigator
	},
	{
		initialRouteName: "Welcome",
		headerMode: "none"
	}
);