import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import BrandPage from './BrandPage';
import Popular from './Popular';
import Details from './Details'
const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName='HomePage'
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
            <Stack.Screen name='HomePage' component={HomePage} options={{ headerShown: false }} ></Stack.Screen>
            <Stack.Screen name='BrandPage' component={BrandPage} options={{ headerShown: false }} ></Stack.Screen>
            <Stack.Screen name='Popular' component={Popular} options={{ headerShown: false }} ></Stack.Screen>
            <Stack.Screen name='Details' component={Details} options={{ headerShown: false }} ></Stack.Screen>
        </Stack.Navigator>
    );
}
export default HomeStack;