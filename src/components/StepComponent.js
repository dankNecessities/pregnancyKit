import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity  } from 'react-native';

export default class StepComponent extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Image source={this.props.source} style={styles.icon}/>
				<Text style={styles.info}>{this.props.text}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	    justifyContent: 'center',
	},
	icon: {
		height: 48,
		width: 48
	},
	info: {
		fontSize: 18
	}
});