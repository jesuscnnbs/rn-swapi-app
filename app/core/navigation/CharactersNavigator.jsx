import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CharactersView, DetailsView } from '../../features';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Characters" component={CharactersView} />
      <Stack.Screen name="Details" component={DetailsView} />
    </Stack.Navigator>
  )
}