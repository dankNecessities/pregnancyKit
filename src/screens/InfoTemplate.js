import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Dimensions, StatusBar } from 'react-native';
import PreparationMenu from '../components/PreparationMenu';
import PreparationHeader from '../components/PreparationHeader';

export default class InfoTemplate extends Component {
	render() {
		return(
			<View style={[styles.container, this.props.style]}>
				<PreparationHeader icon={this.props.icon} title={this.props.title}/>
				<PreparationMenu data={this.props.data}/>
			</View>
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