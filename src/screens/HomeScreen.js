import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Dimensions, StatusBar } from 'react-native';
import Carousel from "react-native-carousel-control";
import {createAppContainer} from 'react-navigation';
//import PreparationScreen from './PreparationScreen';
import PreparationMenu from '../components/PreparationMenu';
import PreparationHeader from '../components/PreparationHeader';
import InfoTemplate from './InfoTemplate';

const preparationData = [
	{ key: 1, source: require('../assets/icon.png'), text: "If you have time, wash your hands" }, 
	{ key: 2, source: require('../assets/icon.png'), text: "Get a comfortable place to lie on"}
]

export default class HomeScreen extends Component {
	render() {
		return(
			<InfoTemplate 
				icon={require('../../assets/icon.png')}
				title={"Preparation"}
				data={preparationData}
			/>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	    backgroundColor: '#FFFFFF',
	    alignItems: 'center',
	    justifyContent: 'center',
	    flexDirection: 'column',
	},
});