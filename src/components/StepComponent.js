import React, { Component } from 'react';
import { 
			View, 
			Image, 
			StyleSheet, 
			Text, 
			TouchableOpacity, 
			Modal, 
			TouchableHighlight, 
			Alert,
			Dimensions
		} from 'react-native';

export default class StepComponent extends Component {
	state = {
		modalVisible: false,
	}

	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}

	render() {
		return(
			<View style={[styles.container, styles.shadow]}>
				<TouchableOpacity
					onPress={() => {
						this.setModalVisible(!this.state.modalVisible);
					}}>
					<View style={styles.container}>
						<Image source={this.props.source} style={styles.icon}/>
						<Text style={styles.info}>{this.props.text}</Text>
						<View style={styles.container}>
							<Modal 
								animationType="slide"
								transparent={true}
								visible={this.state.modalVisible}
								onRequestClose={() => {
									this.setModalVisible(!this.state.modalVisible);
								}}>
								<View style={[styles.modalContainer, styles.shadow]}>
									<View style={{ 'margin': 10 }}>
										<Text style={styles.info}>{this.props.modalText}</Text>
									</View>
									<TouchableOpacity
										onPress={() => {
											this.setModalVisible(!this.state.modalVisible);
										}}>
											<View style={[styles.closeModal, styles.shadow]}>
												<Text style={{'color': 'white'}}>Close</Text>
											</View>
									</TouchableOpacity>
								</View>
							</Modal>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
	    justifyContent: 'center',
	    width: 335,
	    backgroundColor: 'white',
	    margin: 10,
	    padding: 10,
	    borderRadius: 5
	},
	icon: {
		height: 96,
		width: 96,
		margin: 10
	},
	info: {
		fontSize: 18,
		color: 'gray',
		textAlign: 'center',
	},
	shadow: {
	  	shadowColor: '#000',
	  	shadowOffset: { width: 5, height: 10 },
	  	shadowOpacity: 1,
	  	shadowRadius: 8,
	  	elevation: 5,
	},
	modalContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
	    justifyContent: 'center',
	    width: 300,
	    height: 200,
	    backgroundColor: 'white',
	    margin: 10,
	    padding: 10,
	    borderRadius: 5,
	    position: 'absolute',
	    left: 20,
		top: 200
	},
	closeModal: {
		height: 30,
  		width: 50,
  		borderRadius: 5,
  		justifyContent: 'center',
  		alignItems: 'center',
  		backgroundColor: 'blue',
	}
});