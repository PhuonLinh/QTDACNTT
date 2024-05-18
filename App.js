import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OnBoard from './screens/OnBoard';
import HomeNavigator from './screens/HomeNavigator';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='OnBoard'
        screenOptions={{
          cardStyleInterpolator: ({ current, layouts }) => ({
            cardStyle: {
              transform: [
                {
                  translateY: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.height, 0],
                  }),
                },
              ],
            },
          }),
        }}>
        <Stack.Screen name='OnBoard' component={OnBoard} options={{ headerShown: false }} ></Stack.Screen>
        <Stack.Screen name='HomeNavigator' component={HomeNavigator} options={{ headerShown: false }} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}