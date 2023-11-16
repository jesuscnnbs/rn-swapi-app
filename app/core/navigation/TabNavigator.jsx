import { HomeView, CharactersView } from '../../features/index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({}) => ({
        
      })}
    >
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Characters" component={CharactersView} />
    </Tab.Navigator>
  );
}