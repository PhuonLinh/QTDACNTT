import { createStackNavigator } from '@react-navigation/stack';
import Cart from './Cart';
import Details from './Details';
import Purchase from './Purchase';
const Stack = createStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator initialRouteName='Cart'
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
            <Stack.Screen name='Cart' component={Cart} options={{ headerShown: false }} ></Stack.Screen>
            <Stack.Screen name='Details' component={Details} options={{ headerShown: false }} ></Stack.Screen>
            <Stack.Screen name='Purchase' component={Purchase} options={{ headerShown: false }} ></Stack.Screen>
        </Stack.Navigator>
    );
}
export default CartStack;