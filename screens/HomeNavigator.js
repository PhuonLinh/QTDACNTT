import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import HomeStack from './HomeStack';
import FavortiteStack from './FavoriteStack';
import CartStack from './CartStack';
import User from './User';
const Tab = createBottomTabNavigator();
const HomeNavigator = () => {
    return (
        <Tab.Navigator initialRouteName='HomeStack' screenOptions={() => ({
            headerShown: false,
            tabBarActiveTintColor: '#000000',
            tabBarInactiveTintColor: '#cdcdcd',
            tabBarActiveBackgroundColor: '#ffffff',
            tabBarInactiveBackgroundColor: '#ffffff',
            headerTintColor: '#ffffff',
            tabBarStyle: { borderTopWidth: 0 },
            tabBarHideOnKeyboard: true,
        })}>
            <Tab.Screen name="HomeStack" component={HomeStack}
                options={({ route }) => ({
                    title: 'Trang chủ',
                    tabBarStyle: { display: getRouteName(route), borderTopWidth: 0 },
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" size={size} color={color} />
                    )
                })} />
            <Tab.Screen name="FavoriteStack" component={FavortiteStack}
                options={({ route }) => ({
                    title: 'Yêu thích',
                    tabBarStyle: { display: getRouteName(route), borderTopWidth: 0 },
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" size={size} color={color} />
                    )
                })} />
            <Tab.Screen name="CartStack" component={CartStack}
                options={({ route }) => ({
                    title: 'Giỏ hàng',
                    tabBarStyle: { display: getRouteName(route), borderTopWidth: 0 },
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="shopping-cart" size={size} color={color} />
                    )
                })} />
            <Tab.Screen name="User" component={User}
                options={({ route }) => ({
                    title: 'Người dùng',
                    tabBarStyle: { display: getRouteName(route), borderTopWidth: 0 },
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" size={size} color={color} />
                    )
                })} />
        </Tab.Navigator>
    )
}
const getRouteName = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName == "BrandPage" || routeName == "Popular" || routeName == "Details" || routeName === "Purchase")
        return "none";
    return "flex";
}
export default HomeNavigator;