import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Dimensions, StatusBar } from 'react-native';
import Carousel from "react-native-carousel-control";
import {createAppContainer} from 'react-navigation';
//import PreparationScreen from './PreparationScreen';
import PreparationMenu from '../components/PreparationMenu';
import PreparationHeader from '../components/PreparationHeader';
import InfoTemplate from './InfoTemplate';

const deliveryData = [
	{ key: 1, source: require('../assets/handwash.png'), text: "Get ready to cup the baby's head on their way out" }, 
	{ key: 2, source: require('../assets/pillow.png'), text: "Use a clean towel to clean the fluids away from the baby's airway by stroking downwards on the nose and mouth" },
]

export default class DeliveryScreen extends Component {
	render() {
		return(
			<InfoTemplate 
				icon={require('../assets/prepare.png')}
				title={"Delivery"}
				data={deliveryData}
				style={styles.home}
			/>
		);
	}
}

const styles = StyleSheet.create({
	home: {
		backgroundColor: '#CCCCCC'
	}
});