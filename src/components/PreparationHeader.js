import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import PreparationMenu from '../components/PreparationMenu';

export default class PreparationHeader extends Component {
	render() {
		return(
			<View style={styles.header}>
				<Image source={this.props.icon} style={styles.headerIcon}/>
				<Text style={styles.headerText}>{this.props.title}</Text>
			</View>	
		);
	}
}

const styles = StyleSheet.create({
	header: {
		alignItems: 'center',
	    justifyContent: 'center',
	    flexDirection: 'column',	
	},
	headerIcon: {
		height: 150,
		width: 150,
	    marginTop: 40,
	},
	headerText: {
		fontSize: 30,
	}
});