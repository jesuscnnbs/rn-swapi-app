import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { HomeView } from '../../features/index'
import CharactersNavigator from './CharactersNavigator'

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: route.name === 'Characters' ? false : true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home'
          if (route.name === 'Characters') iconName = 'people'
          if (route.name === 'Planets') iconName = 'planet'
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#B7441A',
        tabBarInactiveTintColor: '#CAB7AB',
        tabBarStyle: {
          height: 45,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: 'rgba(34,35,36,0.95)',
          borderTopWidth: 0
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Characters" component={CharactersNavigator} />
    </Tab.Navigator>
  );
}
