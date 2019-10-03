import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class WelcomeScreen extends Component{
	
	componentDidMount() {
		setTimeout(() => {
			this.props.navigation.navigate('Home')
		}, 3000);
	}

	render() {
		return(
			<View style={styles.container}>
				<Image source={require('../../assets/icon.png')} style={styles.icon}/>
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
	icon: {
		height: 96,
		width: 96
	}
});