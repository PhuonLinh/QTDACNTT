import { createStackNavigator } from '@react-navigation/stack';
import Favortite from './Favorite';
import Details from './Details';
const Stack = createStackNavigator();

const FavoriteStack = () => {
    return (
        <Stack.Navigator initialRouteName='Favorite'
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
            <Stack.Screen name='Details' component={Details} options={{ headerShown: false }} ></Stack.Screen>
            <Stack.Screen name='Favorite' component={Favortite} options={{ headerShown: false }} ></Stack.Screen>
        </Stack.Navigator>
    );
}
export default FavoriteStack;