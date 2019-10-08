import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, Modal, TouchableHighlight, Alert } from 'react-native';

export default class ModalInfo extends Component{
	state = {
		modalVisible: false,
	}

	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}

	render() {
		return(
			<View style={ styles.container }>
				<Modal 
					animationType="slide"
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						Alert.alert("closed modal");
					}}>
					<View>
						<Text>Hello World!</Text>
						<TouchableHighlight
							onPress={() => {
								this.setModalVisible(!this.state.modalVisible);
							}}>
							<Text>HIde Modal</Text>
						</TouchableHighlight>
					</View>
					
				</Modal>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	    alignItems: 'center',
	    justifyContent: 'center',
	    flexDirection: 'column',
	},
});