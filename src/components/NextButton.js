import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

export default class NextButton extends Component {
	render() {
		return(
			<View style={styles.container}>
				<ScrollView>
					<TouchableOpacity onPress={this.props.onPress} 
						style={[styles.genericButton, styles.shadow]}>
						<Text style={styles.buttonText}>Next</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	shadow: {
		shadowColor: '#000',
	  	shadowOffset: { width: 5, height: 10 },
	  	shadowOpacity: 1,
	  	shadowRadius: 8,
	  	elevation: 5,
	},
	genericButton: {
  		height: 60,
  		width: 240,
  		borderRadius: 30,
  		justifyContent: 'center',
  		alignItems: 'center',
  		margin: 20,
  		backgroundColor: 'blue',
  	},
  	buttonText: {
  		color: '#FFFFFF',
  		fontSize: 18
  	}
});