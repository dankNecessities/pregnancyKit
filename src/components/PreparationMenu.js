import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Dimensions } from 'react-native';
import StepComponent from './StepComponent';
import NextButton from './NextButton';

export default class PreparationMenu extends Component {
	static navigationOptions = {
    	title: 'Steps',
    };

	render(){
		const steps = this.props.data.map((d) => {
			return (
				<StepComponent 
					source={d.source}
					text={d.text}
					modalText={d.modalText}/>
			)
		})
		return(
			<View style={styles.container}>
				{steps}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 5,
		width: Dimensions.get('window').width,
		marginTop: 10,
		backgroundColor: '#cccccc',
	}
});