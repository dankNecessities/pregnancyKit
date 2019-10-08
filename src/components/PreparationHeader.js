import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import PreparationMenu from '../components/PreparationMenu';

export default class PreparationHeader extends Component {
	render() {
		return(
			<View style={[styles.header, styles.shadow]}>
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
	    backgroundColor: '#429cff',
	    width: 335,
	    height: 250,
	    margin: 10,
	    padding: 10,
	    borderRadius: 5

	},
	headerIcon: {
		height: 150,
		width: 150,
	    marginTop: 40,
	},
	headerText: {
		fontSize: 30,
		color: 'white',
	},
	shadow: {
	  	shadowColor: '#000',
	  	shadowOffset: { width: 5, height: 10 },
	  	shadowOpacity: 1,
	  	shadowRadius: 8,
	  	elevation: 5,
	},
});