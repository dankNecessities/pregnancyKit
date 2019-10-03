import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import PreparationMenu from '../components/PreparationMenu';
import PreparationHeader from '../components/PreparationHeader';
import PreparationChecklist from '../components/PreparationChecklist';
import HomeScreen from '../screens/HomeScreen';

const PreparationNavigator = createMaterialTopTabNavigator(
	{
		Steps: HomeScreen,
		Checklist: PreparationChecklist
	},
	{
		initialRouteName: "Steps",
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

export default createAppContainer(PreparationNavigator);