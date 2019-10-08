import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import PreparationMenu from '../components/PreparationMenu';
import PreparationHeader from '../components/PreparationHeader';
import PreparationChecklist from '../components/PreparationChecklist';
import HomeScreen from '../screens/HomeScreen';
import DeliveryScreen from '../screens/DeliveryScreen';

const MainNavigator = createMaterialTopTabNavigator(
	{
		Preparation: HomeScreen,
		Delivery: DeliveryScreen
	},
	{
		initialRouteName: "Preparation",
		tabBarOptions: {
			activeTintColor: 'white',
			inactiveTintColor: 'gray',
			showIcon: true,  
            style: {  
                backgroundColor:'blue'  
            }  
		},
	},
);

export default createAppContainer(MainNavigator);